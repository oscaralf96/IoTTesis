from mqttasgi.consumers import MqttConsumer
from channels.layers import get_channel_layer
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async

from django.conf import settings
from api.models import *

class MyMqttConsumer(MqttConsumer):

    async def connect(self):
        await self.subscribe('sensors', 2)

    async def receive(self, mqtt_message):
        topic = mqtt_message['topic']
        message = mqtt_message['payload'].decode('utf-8').split('#')
        socket_data = None

        if len(message) == 3:
            socket_data = await self.new_measure(int(message[1]), int(message[2]))
            socket_data['gauge'] = int(message[0])
            socket_data['value'] = int(message[2])


        else:
            print('new message has the incorrect structure')

        await self.publish(
            'response/' + mqtt_message['topic'],
            mqtt_message['payload'],
            qos=mqtt_message['qos'],
            retain=False
        )
        channel_layer = get_channel_layer()
        await channel_layer.group_send(
        "device_%s" % socket_data['gauge'],
        {"type": "gauge_measure", "data": socket_data},
    )

    @database_sync_to_async    
    def new_measure(self, gauge, value):
        measure = Measure(
                gauge=Gauge.objects.get(pk=gauge),
                value=value
            )
        measure.save()
        return {
            'datestamp': measure.datestamp.strftime("%m/%d/%Y, %H:%M:%S")
        }
        
    async def disconnect(self):
        await self.unsubscribe('sensors')
