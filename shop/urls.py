from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('categoryproduct/', CategoryProductView.as_view(),
         name="category_proeuct"),
    path('categories/', CategoryView.as_view(),
         name="categories"),
    path('singlecategories/<int:pk>/', SingleCategoryProductsView.as_view(),
         name="single_categories"),

    path('productdetails/<int:pk>/', SingleProductView.as_view(),
         name="productdetails"),

    path('brands/', BrandNameView.as_view(),
         name="brands"),
    path('brandproducts/<int:pk>/', SingleBrandProductsView.as_view(),
         name="brandproducts"),
    path('trendingproducts/', TrandingProductsView.as_view(),
         name="trendingproducts"),
    path('sliders/', SliderView.as_view(),
         name="sliders"),
    path('productview/', AddViewProduct.as_view(),
         name="productview"),
    path('mostproductview/', MostViewProducts.as_view(),
         name="mostproductview"),
    path('search/<str:q>/', SearchView.as_view(),
         name="search"),
    path('profile/', ProfileView.as_view(),
         name="profile"),
    path('register/', RegisterUserView.as_view(),
         name="register"),

    path('addreview/', AddReviews.as_view(),
         name="addreview"),

    path('login/', obtain_auth_token),

]
