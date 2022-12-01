from django.shortcuts import render
import requests
from backend.settings import SERVER_URL
from api.models import *
from django.http import HttpResponse

# Create your views here.
def equipment(request):
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
        template_name='equipment/equipment.html',
        context={
            'equipments': equipments
        }
    )


def manage_equipment(request, pk):
    equipments = []
    equipment = Equipment.objects.get(pk=pk)
    
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
        template_name='equipment/equipment_list.html',
        context={
            'equipments': equipments
        }
    )

def add_equipment(request):
    
    return render(
        request=request,
        template_name='equipment/add_equipment.html',
        context={

        }
    )
    
def add_device(request):
    
    return render(
        request=request,
        template_name='equipment/add_device.html',
        context={

        }
    )

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def headers_test(request):
    print(request.headers['Content-Type'])
    print(request.POST)
    return HttpResponse(request.headers)