from rest_framework import generics
from .models import Hero
from .serializers import HeroSerializer

class ListHero(generics.ListCreateAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer

class DetailHero(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer