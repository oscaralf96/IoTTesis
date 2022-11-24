from django.shortcuts import render
import requests
from backend.settings import SERVER_URL
from api.models import *

# Create your views here.
def home(request):
    endpoint = f'http://backend:8000/api/equipments_by_user/{request.user.id}/'
    params = {
        'format': 'json'
    }
    
    equipments = [ Equipment.objects.get(pk=i) for i in 
        requests.get(endpoint, params=params).json()['equipments']
    ]


    return render(
        request=request,
        template_name='equipos/equipos.html',
        context={
            'equipments': equipments
        }
    )