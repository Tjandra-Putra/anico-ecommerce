import json
import datetime
from flask import render_template, url_for, flash, redirect, request, jsonify
from flask_login import login_user, logout_user, current_user, login_required
from flask_mail import Message
from datetime import date

from anico_application.forms import validate_register_form
from anico_application import app, db, bcrypt, mail, csrf
from anico_application.models import Support

@app.route('/api/register/form-submit', methods=['POST', 'GET'])
@csrf.exempt #prevent form spams
def register():
    if request.method == 'POST':
        req = request.json

        validated_form = validate_register_form(req)

        
        
        today = date.today()
        d1 = today.strftime("%d/%m/%Y")

        current_time = datetime.datetime.now()

        formatted_date = str(d1) + ", " + str(current_time.strftime("%I")) + ":" + str(current_time.strftime("%M")) + " " + str(current_time.strftime("%p"))

        return req

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

            today = date.today()
            d1 = today.strftime("%d/%m/%Y")

            current_time = datetime.datetime.now()

            format_time = str(d1) + ", " + str(current_time.strftime("%I")) + ":" + str(current_time.strftime("%M")) + " " + str(current_time.strftime("%p"))

            print(format_time)

            data = Support(name=name_field, email=email_field, subject=subject_field, message=message_field, date=format_time)
            
            db.session.add(data)
            db.session.commit()

            return req

        except:
            print("An exception occured")

    return ''

