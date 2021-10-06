from anico_application import bcrypt

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