from django.urls import path, include
from .views import *

urlpatterns = [
    path('register/',registerUser,name='register'),
    path('create_blog/',create_blog,name='create_blog'),
    path('blog_list/',blog_list,name='blog_list'),
    path('update_blog/<int:pk>',update_blog,name='update_blog'),
]