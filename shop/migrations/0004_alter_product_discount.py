# Generated by Django 4.0 on 2022-01-12 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_brand_cart_category_product_trendingproduct_slider_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='discount',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
