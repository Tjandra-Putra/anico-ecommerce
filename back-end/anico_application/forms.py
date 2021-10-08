import re
from anico_application.models import User
from anico_application import bcrypt

def validate_register_form(req):
    # For client side, just check if error is not empty means got error hence will not submit the form
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

    error_msg_email = error_msg_phone = error_msg_password = error_msg_password_confirm = ''

    error_msg_dict = {
        'email': error_msg_email,
        'phone': error_msg_phone,
        'password': error_msg_password,
        'password_confirm': error_msg_password_confirm,
        }

    # check if the field exists in the response json, if empty, it will not be in the response
    for err in error_msg_dict:
        if(err not in req):
            error_msg_dict[err] = "Field is empty."

    for field, value in req.items():
        # validate email field
        if field == 'email':
            email = value

            # check email format
            if(re.fullmatch(regex, email) == None):
                error_msg_dict[field] = "Email is invalid."

            # check if email exist in database
            user_data = User.query.filter_by(email=email).first()

            if user_data:
                error_msg_dict[field] = "This email is already taken."

        # validate phone field
        if field == 'phone':
            phone = value
            numerals = "0123456789+"

            # check if email exist in database
            user_data = User.query.filter_by(email=email).first()

            if user_data.phone_number:
                error_msg_dict[field] = "This phone number is already taken."

            if "+" not in phone:
                error_msg_dict[field] = "Phone number is invalid."

            else:
                for index in range(len(phone)):
                    if phone[index] not in numerals:
                        error_msg_dict[field] = "Phone number is invalid."

                    elif phone[0:3] != "+65":
                        error_msg_dict[field] = "Phone number is invalid."

                    elif len(phone) != 11:
                        error_msg_dict[field] = "Phone number is invalid."

        # validate passwords field
        if field == 'password':
            password = value

            if len(password) < 8:
                error_msg_dict[field] = "Password must be at least 8 characters."

        if field == 'password_confirm':
            password_confirm = value

            if password_confirm != password:
                error_msg_dict[field] = "Password must be the same."

    return error_msg_dict
                    

def validate_login_form(req):
    error_msg_email = error_msg_password = ''
    # user_db = User.query.filter_by(email=req['email']).first()

    # print(req['email'])

    error_msg_dict = {
    'email': error_msg_email,
    'password': error_msg_password
    }

    for err in error_msg_dict:
        if(err not in req):
            error_msg_dict[err] = "Field is empty."

    for field, value in req.items():
        email_field = req['email']
        user_db = User.query.filter_by(email=req['email']).first()

        # validate email field
        if field == 'email':
            email_field = value

            # check if email does not exist in database
            user_data = User.query.filter_by(email=email_field).first()

            if not user_data:
                error_msg_dict[field] = "Email is wrong."

         # validate passwords field
        if field == 'password':
            password_field = value

            # user_db = User.query.filter_by(email=email_field).first()

            # # get user object from db
            if not bcrypt.check_password_hash(user_db.password, password_field):
                error_msg_dict[field] = "Password is wrong."

    return error_msg_dict
