from django.urls import path
from . import views

urlpatterns = [
    path(route='logs/<int:device>/', view=views.show_logs, name='logs'),
]
