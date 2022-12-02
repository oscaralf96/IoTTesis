from django.urls import path
from . import views

urlpatterns = [
    path(route='equipment/', view=views.equipment, name='equipment'),
    path(route='equipment/<int:pk>/', view=views.manage_equipment, name='manage_equipment'),
    path(route='add_equipment/', view=views.add_equipment, name='add_equipment'),
    path(route='add_device/', view=views.add_device, name='add_device'),
    path(route='headers_test/', view=views.headers_test, name='headers_test')
]
