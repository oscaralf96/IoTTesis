from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def show_logs(request, device):
    
    return render(
        request=request,
        template_name='mqtt/logs.html',
        context={

        }
    )

    