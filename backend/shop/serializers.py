from rest_framework import serializers
from .models import Item, OrderItem, Order


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        # fields = '__all__'
        fields = ['id', 'title', 'price']
