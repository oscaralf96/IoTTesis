from django.urls import path
from . import views

urlpatterns = [
    # path(route='add/', view=views.add, name='areas'),
    # path(route='read/', view=views.read, name='areas'),
    # path(route='update/', view=views.update, name='areas'),
    # path(route='delete/', view=views.delete, name='areas'),

    path(route='equipment/', view=views.equipment, name='equipment'),
    path(route='equipment/<int:pk>/', view=views.manage_equipment, name='manage_equipment'),
    path(route='add_equipment/', view=views.add_equipment, name='add_equipment'),
    path(route='headers_test/', view=views.headers_test, name='headers_test')
]
