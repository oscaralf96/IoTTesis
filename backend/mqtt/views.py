from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def show_logs(request):
    
    # return render(
    #     request=request,
    #     template_name='equipment/add_device.html',
    #     context={

    #     }
    # )
    return HttpResponse('logs')