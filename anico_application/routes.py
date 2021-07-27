import json

from flask import render_template, url_for, flash, redirect, request
from flask_wtf import form
from flask_login import login_user, logout_user, current_user, login_required
from flask_mail import Message

from anico_application import app, db, bcrypt, mail

@app.route('/')
def home():
    return render_template('index.html', page="home")