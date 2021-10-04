import json
import datetime
from flask import render_template, url_for, flash, redirect, request, jsonify
from flask_login import login_user, logout_user, current_user, login_required
from flask_mail import Message
from datetime import date

from anico_application import app, db, bcrypt, mail, csrf
from anico_application.models import Support


@app.route('/api/support/form-submit', methods=['POST', 'GET'])
@csrf.exempt #prevent form spams
def support():
    if request.method == 'POST':
        try:
            req = request.json
            name = req['name']
            email = req['email']
            subject = req['subject']
            message = req['message']

            today = date.today()
            d1 = today.strftime("%d/%m/%Y")

            current_time = datetime.datetime.now()

            format_time = str(d1) + ", " + str(current_time.strftime("%I")) + ":" + str(current_time.strftime("%M")) + " " + str(current_time.strftime("%p"))

            print(format_time)

            data = Support(name=name, email=email, subject=subject, message=message, date=format_time)
            
            db.session.add(data)
            db.session.commit()

            return req

        except:
            print("An exception occured")

    return ''

