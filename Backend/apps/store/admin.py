from django.contrib import admin
from .models import Product, Workshop, OrderItem, Booking, Order, Newsletter


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'quantity', 'is_active')


@admin.register(Workshop)
class WorkshopAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'date', 'start_time', 'capacity')


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('name','email', 'total_amount', 'is_paid', 'created_at')


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity')


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('order', 'workshop', 'seats_reserved')


@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('email', 'date_subscribed')