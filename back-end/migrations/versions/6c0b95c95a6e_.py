"""empty message

Revision ID: 6c0b95c95a6e
Revises: a889f1ba2297
Create Date: 2021-11-28 17:17:51.024501

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6c0b95c95a6e'
down_revision = 'a889f1ba2297'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('image_url', sa.String(length=350), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('product', 'image_url')
    # ### end Alembic commands ###
