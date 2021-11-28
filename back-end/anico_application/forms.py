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

        # valid email
        if error_msg_dict['email'] == '': # value of email field is not empty

            # Initiation
            user_data = User.query.filter_by(email=req['email']).first() # By email address

            # validate email field
            if field == 'email':
                email = value

                # check email format
                if(re.fullmatch(regex, email) == None):
                    error_msg_dict[field] = "Email is invalid."

                # check if email exist in database
                elif user_data:
                    error_msg_dict[field] = "This email is already taken."
                    

            # validate phone field
            if field == 'phone':
                phone = value
                numerals = "0123456789+"

                if "+" not in phone:
                    error_msg_dict[field] = "Phone number is invalid."

                user_data = User.query.filter_by(phone_number=phone).first() # By phone number

                if user_data:
                    error_msg_dict[field] = "This phone number is already taken."

                else:
                    for index in range(len(phone)):
                        if phone[index] not in numerals:
                            error_msg_dict[field] = "Phone number is invalid."

                        elif phone[0:3] != "+65":
                            error_msg_dict[field] = "Phone number is invalid."

                        elif len(phone) != 11:
                            error_msg_dict[field] = "Phone number is invalid."

            if error_msg_dict['password'] == '': # value of password field is not empty                                 
                # validate passwords field
                if field == 'password':
                    password = value

                    if len(password) < 8:
                        error_msg_dict[field] = "Password must be at least 8 characters."

                    else: # password field is valid
                        password_confirm = req['password_confirm']

                        if password_confirm != password:
                            error_msg_dict['password_confirm'] = "Password must be the same."

            else:
                error_msg_dict['password_confirm'] = "Please enter your password first."

            # validate email field
            if field == 'password_confirm':
                password_confirm = value

                if len(password_confirm) < 8:
                    error_msg_dict[field] = "Password must be at least 8 characters."

        else:
            if error_msg_dict['email'] == "Field is empty.":
                error_msg_dict[field] = "Please enter your email first."

    return error_msg_dict
                    

def validate_login_form(req):
    error_msg_email = error_msg_password = global_email = ''

    error_msg_dict = {
    'email': error_msg_email,
    'password': error_msg_password
    }

    for err in error_msg_dict:
        if(err not in req):
            error_msg_dict[err] = "Field is empty."

    for field, value in req.items():
        # validate email field
        if field == 'email':
            email_field = value
            global_email = value

            user_data = User.query.filter_by(email=email_field).first()

            # check if email does not exist in database
            if not user_data:
                error_msg_dict[field] = "The email or password you entered is incorrect."

         # validate passwords field
        if field == 'password':
            password_field = value
            try:
                user_data = User.query.filter_by(email=global_email).first()

                # get user object from db
                if not bcrypt.check_password_hash(user_data.password, password_field):
                    error_msg_dict['password'] = "The email or password you entered is incorrect."

            except:
                error_msg_dict['password'] = "The email or password you entered is incorrect."


    return error_msg_dict
