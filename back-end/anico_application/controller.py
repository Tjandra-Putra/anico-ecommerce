from typing import Text
from anico_application import bcrypt
import datetime
from datetime import date
from textblob import TextBlob


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


def get_sentiment_analysis(text):
    blob_obj = TextBlob(text)
    polarity = blob_obj.sentiment.polarity

    if polarity < 0:
        return 'Negative'

    elif polarity == 0:
        return 'Neutral'

    else:
        return 'Positive'
 
def get_products(db_product):
    data_dict = {}

    for product in db_product:
         images_list = []

         images_list.append(product.image_urls[0].image_url)
         data_dict[product.id] = {
            'product_title': product.title,
            'product_tag': product.tag,
            'product_description': product.description,
            'product_price': product.price,
            'product_size': product.sizes[0].size, # foreign key 
            'product_image_url': images_list, # foreign key
            'product_stock': product.stocks[0].stock, # foreign key
            } 

    

    return data_dict