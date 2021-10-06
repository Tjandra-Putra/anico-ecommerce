from anico_application import bcrypt
import datetime
from datetime import date


def get_username(email):
    username = ''

    for index in range(len(email)):
        ch = email[index]

        if ch == "@":
            username = email[0:index]

    return username


def get_hashed_password(password):
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')  # To make a string instead of byte

    return hashed_password


def get_custom_date():
    today = date.today()

    d1 = today.strftime("%d/%m/%Y")

    current_time = datetime.datetime.now()

    formatted_date = str(d1) + ", " + str(current_time.strftime("%I")) + ":" + str(current_time.strftime("%M")) + " " + str(current_time.strftime("%p"))

    return formatted_date