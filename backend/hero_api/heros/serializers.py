from rest_framework import serializers
from .models import Hero

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'description',
        )
        model = Hero