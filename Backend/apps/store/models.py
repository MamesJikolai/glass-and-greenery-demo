from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, help_text='A short description of the product.')
    price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Workshop(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, help_text='A short description of the workshop.')
    price = models.DecimalField(max_digits=8, decimal_places=2)
    date = models.DateField()
    start_time = models.TimeField()
    capacity = models.PositiveIntegerField(default=10)

    def __str__(self):
        return f"{self.name} on {self.date}"


class Order(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    total_amount = models.DecimalField(max_digits=8, decimal_places=2)
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} - {self.name}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.quantity}x {self.product.name}"


class Booking(models.Model):
    order = models.ForeignKey(Order, related_name='bookings', on_delete=models.PROTECT)
    workshop = models.ForeignKey(Workshop, on_delete=models.PROTECT)
    seats_reserved = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.seats_reserved} seats for {self.workshop.name}"


class Newsletter(models.Model):
    email = models.EmailField(unique=True)
    date_subscribed = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
