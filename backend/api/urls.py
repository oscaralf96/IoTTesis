from django.urls import path
from . import views


urlpatterns = [
    # path(route='users/', view=views.UserList.as_view(), name='users'),
    path(route='equipments/', view=views.EquipmentList.as_view(), name='equipments'),
    path(route='equipments/<int:pk>/', view=views.EquipmentUpdateDestroy.as_view(), name='equipments_destroy'),
    path(route='equipments_by_user/<int:pk>/', view=views.EquipmentsByUser.as_view(), name='equipments_by_user'),
    path(route='boards/', view=views.BoardList.as_view(), name='boards'),
    path(route='boards/<int:pk>/', view=views.BoardUpdateDestroy.as_view(), name='boards_destroy'),
    path(route='sensors/', view=views.SensorList.as_view(), name='sensors'),
    path(route='sensors/<int:pk>/', view=views.SensorUpdateDestroy.as_view(), name='sensors_destroy'),
    path(route='devices/', view=views.DeviceList.as_view(), name='devices'),
    path(route='devices/<int:pk>/', view=views.DeviceUpdateDestroy.as_view(), name='devices_destroy'),
    path(route='devices_by_equipment/<int:pk>/', view=views.DevicesByEquipment.as_view(), name='equipments_by_user'),
    path(route='gauges/', view=views.GaugeList.as_view(), name='gauges'),
    path(route='gauges/<int:pk>/', view=views.GaugeUpdateDestroy.as_view(), name='gauges_destroy'),
    path(route='gauges_by_devices/<int:pk>/', view=views.GaugesByDevice.as_view(), name='equipments_by_user'),
    path(route='measures/', view=views.MeasureList.as_view(), name='measure'),
    path(route='measures/<int:pk>/', view=views.MeasureUpdateDestroy.as_view(), name='measure_destroy'),
    path(route='measures_by_devices/<int:pk>/', view=views.MeasuresByDevice.as_view(), name='equipments_by_user'),
]
