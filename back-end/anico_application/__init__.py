import os

from flask import Flask
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect
from flask_cors import CORS

app = Flask(__name__)
csrf = CSRFProtect(app)

app.config['SECRET_KEY'] = '5791628bb0b13ce0c676de280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')
app.config['CORS_HEADERS'] = 'Content-Type'

db = SQLAlchemy(app)  # Database instance
bcrypt = Bcrypt(app)
# login_manager = LoginManager(app)
migrate = Migrate(app, db)
mail = Mail(app)
cors = CORS(app)


# login_manager.login_view = 'login'  # Function name of route
# login_manager.login_message_category = 'info'

from anico_application import routes  # Has to be imported at the bottom to prevent 'circular' import
