from django.shortcuts import render

# models
from django.contrib.auth.models import User
from .models import *

# serializers
from .serializers import *

# Django Rest Framework
from rest_framework import generics, permissions
from rest_framework.parsers import JSONParser, MultiPartParser 


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class EquipmentList(generics.ListCreateAPIView):
    authentication_classes = []
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer
    
    def perform_create(self, serializer):
        print(serializer.validated_data)
        user_id = serializer.validated_data.get('user_id') or None
        if user_id != None:
            user = User.objects.get(pk=user_id)
            serializer.save(user=user)
        else:
            serializer.save()


class EquipmentUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = []
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer


class EquipmentsByUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = EquipmentsByUserSerializer


class BoardList(generics.ListCreateAPIView):
    authentication_classes = []
    queryset = Board.objects.all()
    serializer_class = BoardSerializer


class BoardUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = []
    queryset = Board.objects.all()
    serializer_class = BoardSerializer


class SensorList(generics.ListCreateAPIView):
    authentication_classes = []
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer


class SensorUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = []
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer


class DeviceList(generics.ListCreateAPIView):
    authentication_classes = []
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


class DeviceUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = []
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


class DevicesByEquipment(generics.RetrieveUpdateDestroyAPIView):
    queryset = Equipment.objects.all()
    serializer_class = DevicesByEquipmentSerializer


class GaugeList(generics.ListCreateAPIView):
    authentication_classes = []
    queryset = Gauge.objects.all()
    serializer_class = GaugeSerializer

class GaugeUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = [permissions.IsAdminUser]
    authentication_classes = []
    queryset = Gauge.objects.all()
    serializer_class = GaugeSerializer


class GaugesByDevice(generics.RetrieveUpdateDestroyAPIView):
    queryset = Device.objects.all()
    serializer_class = DevicesByEquipmentSerializer


class MeasureList(generics.ListCreateAPIView):
    queryset = Measure.objects.all()
    serializer_class = MeasureSerializer


class MeasureUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Measure.objects.all()
    serializer_class = MeasureSerializer


class MeasuresByDevice(generics.RetrieveUpdateDestroyAPIView):
    queryset = Device.objects.all()
    serializer_class = DevicesByEquipmentSerializer