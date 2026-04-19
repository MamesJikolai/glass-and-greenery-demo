from rest_framework import viewsets
from apps.store.models import Product, Workshop
from .serializers import ProductSerializer, WorkshopSerializer


# Create your views here.
class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer


class WorkshopViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
