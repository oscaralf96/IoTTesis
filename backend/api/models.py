from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Equipment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        """Return equipment name."""
        return f'{self.name}'


class Board(models.Model):
    specs = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        """Return board name."""
        return f'{self.name}'


class Sensor(models.Model):
    name = models.CharField(max_length=100)
    magnitud = models.CharField(max_length=100)

    def __str__(self):
        """Return sensor name."""
        return f'{self.name}'


class Device(models.Model):
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

    def __str__(self):
        """Return device id."""
        return f'{self.pk}'


class Gauge(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    '''
    agregar un:
    datestamp = models.DateTimeField(auto_now_add=True)
    y/o posiblemente y campo "name" para distinguir sensores iguales
    ejemplo: Sensor temperatura nariz. (inyectora)
    '''

    def __str__(self):
        """Return gauge id."""
        return f'{self.pk}'


class Measure(models.Model):
    gauge = models.ForeignKey(Gauge, on_delete=models.CASCADE)
    datestamp = models.DateTimeField(auto_now_add=True)
    value = models.IntegerField()

    def __str__(self):
        """Return measure value."""
        return f'{self.value}'