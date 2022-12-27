from django.urls import path
from . import views

urlpatterns = [
    path(route='equipment/', view=views.equipment, name='equipment'),
    path(route='equipment/<int:pk>/', view=views.manage_equipment, name='manage_equipment'),
    path(route='logs/<int:device>/', view=views.show_logs, name='logs'),
    
    path(route='resources/', view=views.resources, name='resources'),
]
