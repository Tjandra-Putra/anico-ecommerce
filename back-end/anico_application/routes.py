import json
from flask import render_template, url_for, flash, redirect, request, jsonify
from flask_login import login_user, logout_user, current_user, login_required
from flask_mail import Message
from flask_migrate import current

from anico_application.forms import validate_register_form, validate_login_form
from anico_application import app, db, bcrypt, mail, csrf
from anico_application.models import Support, User
from anico_application.controller import get_username, get_hashed_password, get_custom_date, get_sentiment_analysis

@app.route('/api/register/form-submit', methods=['POST'])
@csrf.exempt #prevent form spams
def register():
    if request.method == 'POST':
        req = request.json
        validated_form = validate_register_form(req)

        isValidated = True
        print(validated_form)

        for key, value in validated_form.items():
            if value != '':
                isValidated = False
        
        # save to database
        if isValidated: # True
            user_name_sliced = get_username(req['email'])
            hashed_password = get_hashed_password(req['password'])

            user_data = User(username=user_name_sliced, email=req['email'], phone_number=req['phone'], password=hashed_password)

            db.session.add(user_data)
            db.session.commit()

            return {'isValid': 'valid'}


        # send error response to client side
        else:
            print("sent to client side")
            return validated_form


@app.route('/api/login/form-submit', methods=['POST', 'GET'])
@csrf.exempt #prevent form spams
def login():
    if request.method == 'POST':
        req = request.json

        validated_form = validate_login_form(req)

        isValidated = True

        for key, value in validated_form.items():
            if value != '':
                isValidated = False
        
        # successful login
        if isValidated: # True
            user_db = User.query.filter_by(email=req['email']).first()

            login_user(user_db)
            print(current_user.email)

            return {'isValid': 'valid'}


        # send error response to client side
        else:
            print("sent to client side")
            return validated_form

    else:
        print(current_user.email)

    return ''

@app.route('/api/support/form-submit', methods=['POST', 'GET'])
@csrf.exempt #prevent form spams
def support():
    if request.method == 'POST':
        try:
            req = request.json

            name_field = req['name']
            email_field = req['email']
            subject_field = req['subject']
            message_field = req['message']

            formatted_date = get_custom_date()

            sentiment_analysis = get_sentiment_analysis(message_field)

            data = Support(name=name_field, email=email_field, subject=subject_field, message=message_field, date=formatted_date, sentiment=sentiment_analysis)
            
            db.session.add(data)
            db.session.commit()

            return req

        except:
            print("An exception occured")

    return ''

@app.route('/api/favourite/form-submit', methods=['POST', 'GET'])
def favourite():
    print(current_user.email)

    return {"Hello": "World"}
