from django.urls import path
from . import views

urlpatterns = [
    path(route='equipment/', view=views.equipment, name='equipment'),
    path(route='equipment/<int:pk>/', view=views.manage_equipment, name='manage_equipment'),
    path(route='headers_test/', view=views.headers_test, name='headers_test'),
    path(route='logs/<int:device>/', view=views.show_logs, name='logs'),
    
    path(route='user/', view=views.user, name='user'),
    path(route='settings/', view=views.settings, name='settings'),
    path(route='support/', view=views.support, name='support'),
    path(route='comodin/', view=views.comodin, name='comodoin'),
    path( route='home/', view=views.home, name='home'),
]
