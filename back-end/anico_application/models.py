from anico_application import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    tag = db.Column(db.String(50), nullable=True, default="")
    description = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Float, nullable=False)
    total_favourites = db.Column(db.Integer, nullable=False)

    # Foreign Keys
    size = db.relationship('size', backref='productsize')
    image_url = db.relationship('image_url', backref='productimage')
    stock = db.relationship('stock', backref='productstock')


class ProductSize(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String(50), nullable=False)

    # Foreign Keys
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class ProductImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(100), nullable=False)

    # Foreign Keys
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class ProductStock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stock = db.Column(db.integer, nullable=False)

    # Foreign Keys
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class Support(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(50), nullable=False)
    message = db.Column(db.String(500), nullable=False)
    date = db.Column(db.String(50), nullable=False)