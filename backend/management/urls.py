from django.urls import path
from . import views

urlpatterns = [
    # path(route='add/', view=views.add, name='areas'),
    # path(route='read/', view=views.read, name='areas'),
    # path(route='update/', view=views.update, name='areas'),
    # path(route='delete/', view=views.delete, name='areas'),

    path(route='home/', view=views.home, name='home'),
]