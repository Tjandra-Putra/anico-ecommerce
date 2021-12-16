import os

from flask import Flask
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)
csrf = CSRFProtect(app)

app.config['SECRET_KEY'] = '5791628bb0b13ce0c676de280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')
app.config['CORS_HEADERS'] = 'Content-Type' # f0r react
app.config["JWT_SECRET_KEY"] = 'fQZhQRxHEuHJKfTIxfkF9CihuzNO7zVX' 


db = SQLAlchemy(app)  # database instance
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)
mail = Mail(app)
jwt = JWTManager(app)
# cors = CORS(app,  resources={r"/foo": {"origins": "http://127.0.0.1:81"}}) # for react
cors = CORS(app)

from anico_application import routes  # has to be imported at the bottom to prevent 'circular' import
