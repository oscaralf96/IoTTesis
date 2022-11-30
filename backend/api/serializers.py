from rest_framework import serializers

from .models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        

class EquipmentSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Equipment
        fields = ['id', 'user', 'name']
        

class BoardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Board
        fields = ['id', 'name', 'specs', 'image']
        

class SensorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sensor
        fields = ['id', 'name', 'magnitud']
        

class DeviceSerializer(serializers.ModelSerializer):
    equipment = serializers.PrimaryKeyRelatedField(queryset=Equipment.objects.all())
    board = serializers.PrimaryKeyRelatedField(queryset=Board.objects.all())

    class Meta:
        model = Device
        fields = ['id', 'equipment', 'board']
        

class GaugeSerializer(serializers.ModelSerializer):
    sensor = serializers.PrimaryKeyRelatedField(queryset=Sensor.objects.all())
    device = serializers.PrimaryKeyRelatedField(queryset=Device.objects.all())

    class Meta:
        model = Gauge
        fields = ['id', 'sensor', 'device']
        

class MeasureSerializer(serializers.ModelSerializer):
    gauge = serializers.PrimaryKeyRelatedField(queryset=Gauge.objects.all())

    class Meta:
        model = Measure
        fields = ['id', 'gauge', 'value', 'datestamp']
        

"""Related serializers"""

class EquipmentsByUserSerializer(serializers.ModelSerializer):
    equipments = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'equipments']
        

class DevicesByEquipmentSerializer(serializers.ModelSerializer):
    devices = serializers.PrimaryKeyRelatedField(queryset=Equipment.objects.all(), many=True)

    class Meta:
        model = Equipment
        fields = ['id', 'name', 'devices']
        

class GaugesByDeviceSerializer(serializers.ModelSerializer):
    gauges = serializers.PrimaryKeyRelatedField(queryset=Device.objects.all(), many=True)

    class Meta:
        model = Device
        fields = ['id', 'name', 'gauges']
        

class MeasuresByDeviceSerializer(serializers.ModelSerializer):
    measures = serializers.PrimaryKeyRelatedField(queryset=Device.objects.all(), many=True)

    class Meta:
        model = Device
        fields = ['id', 'name', 'gauges']