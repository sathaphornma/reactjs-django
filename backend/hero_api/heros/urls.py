from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListHero.as_view()),
    path('<int:pk>/', views.DetailHero.as_view()),
]