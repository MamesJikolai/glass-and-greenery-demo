from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, WorkshopViewSet

# Create your urls here.
router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'workshops', WorkshopViewSet, basename='workshop')

urlpatterns = [
    path('', include(router.urls)),
]
