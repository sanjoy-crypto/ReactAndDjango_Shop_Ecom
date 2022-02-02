from django.contrib import admin
from .models import (
    Customer,
    Category,
    Brand,
    Product,
    ProductView,
    Review,
    Slider,
    TrendingProduct,
    Cart,
    CartProduct,
    Order,
)

# Register your models here.
admin.site.register([
    Customer,
    Brand,
    Product,
    ProductView,
    Review,
    Slider,
    TrendingProduct,
    Cart,
    CartProduct,
    Order,
    Category,
])
