from django.shortcuts import render
import requests
from backend.settings import SERVER_URL
from api.models import *

# Create your views here.
def home(request):
    params = {
        'format': 'json'
    }
    equipments = []
    
    for equipment in list(Equipment.objects.filter(user=request.user)):
        devices = []
        for device in list(Device.objects.filter(equipment=equipment)):
            gauges = []
            for gauge in list(Gauge.objects.filter(device=device)):
                gauges.append(
                    {
                     'gauge': gauge,
                     'measures': list(Measure.objects.filter(gauge=gauge))
                    }
                )
            devices.append(
                {
                    'device': device,
                    'gauges': gauges
                }
            )

        equipments.append(
            {
                'equipment': equipment,
                'devices': devices
            }
        )


    return render(
        request=request,
        template_name='equipos/equipos.html',
        context={
            'equipments': equipments
        }
    )