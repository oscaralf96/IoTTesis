from django.urls import path
from . import views


urlpatterns = [
    # path(route='users/', view=views.UserList.as_view(), name='users'),
    path(route='equipments/', view=views.EquipmentList.as_view(), name='equipments'),
    path(route='equipments/<int:pk>/', view=views.EquipmentUpdateDestroy.as_view(), name='equipments_destroy'),
    path(route='boards/', view=views.BoardList.as_view(), name='boards'),
    path(route='boards/', view=views.BoardUpdateDestroy.as_view(), name='boards_destroy'),
    path(route='sensors/', view=views.SensorList.as_view(), name='sensors'),
    path(route='sensors/', view=views.SensorUpdateDestroy.as_view(), name='sensors_destroy'),
    path(route='devices/', view=views.DeviceList.as_view(), name='devices'),
    path(route='devices/', view=views.DeviceUpdateDestroy.as_view(), name='devices_destroy'),
    path(route='gauges/', view=views.GaugeList.as_view(), name='gauges'),
    path(route='gauges/', view=views.GaugeUpdateDestroy.as_view(), name='gauges_destroy'),
    path(route='measure/', view=views.MeasureList.as_view(), name='measure'),
    path(route='measure/', view=views.MeasureUpdateDestroy.as_view(), name='measure_destroy'),
]
