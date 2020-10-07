from django.urls import path
from . import views

urlpatterns = [
    path('post/', views.MyHeros.as_view(), name= 'posts_list'),
]


"""
path('', views.ListHero.as_view()),
path('<int:pk>/', views.DetailHero.as_view()),
"""