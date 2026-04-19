from rest_framework import serializers
from apps.store.models import Product, Workshop

# Create your serializers here
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'quantity', 'image', 'is_active']


class WorkshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshop
        fields = ['id', 'name', 'description', 'price', 'date', 'start_time', 'capacity']
