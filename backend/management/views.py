from django.shortcuts import render
from django.contrib.auth.decorators import login_required
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


from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def headers_test(request):
    print(request.headers['Content-Type'])
    print(request.POST)
    return HttpResponse(request.headers)

@login_required
def show_logs(request, device):
    device = Device.objects.get(pk=device)
    return render(
        request=request,
        template_name='equipment/logs.html',
        context={
            'device': device
        }
    )

@login_required
def user(request):
    
    return render(
        request=request,
        template_name='equipment/user.html', 
        context={

        }
    )
@login_required()
def settings(request):    
    return render(
        request=request, 
        template_name='equipment/settings.html', 
        context={
        }
    )

    
@login_required()
def support(request):    
    return render(
        request=request, 
        template_name='equipment/support.html', 
        context={
        }
    )


@login_required()
def comodin(request):    
    return render(
        request=request, 
        template_name='equipment/comodin.html', 
        context={
        }
    )

    
@login_required()
def home(request):    
    return render(
        request=request, 
        template_name='equipment/home.html', 
        context={
        }
    )  