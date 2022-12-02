from django.urls import path
from . import views

urlpatterns = [
    path(route='logs/', view=views.show_logs, name='logs'),
]
