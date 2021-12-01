from anico_application import db, login_manager, app
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(120), default="", nullable=True)
    password = db.Column(db.String(60), nullable=False)
    role = db.Column(db.String(20), nullable=True, default="customer")

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    tag = db.Column(db.String(50), nullable=True, default="")
    description = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Float, nullable=False)

    # Foreign Keys
    sizes = db.relationship('ProductSize', backref='product_size')
    image_urls = db.relationship('ProductImage', backref='product_image')
    stocks = db.relationship('ProductStock', backref='product_stock')


class ProductSize(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String(50), nullable=False)

    # Foreign Keys
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class ProductImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(300), nullable=False)

    # Foreign Keys
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class ProductStock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stock = db.Column(db.Integer, nullable=False)

    # Foreign Keys
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class Support(db.Model):
    __tablename__ = 'support'

    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(50), nullable=False)
    message = db.Column(db.String(500), nullable=False)
    sentiment = db.Column(db.String(10), nullable=False)
    date = db.Column(db.String(50), nullable=False)