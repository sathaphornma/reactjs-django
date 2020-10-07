# from rest_framework import generics
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status

from .models import Hero
from .serializers import HeroSerializer

"""
class ListHero(generics.ListCreateAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer

class DetailHero(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
"""

class MyHeros(APIView):
    # permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        Heros = Hero.objects.all()
        serializer = HeroSerializer(Heros, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = HeroSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)