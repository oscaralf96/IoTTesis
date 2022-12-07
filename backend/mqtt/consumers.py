from mqttasgi.consumers import MqttConsumer
from channels.layers import get_channel_layer
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
import json

from django.conf import settings
from api.models import *

class MyMqttConsumer(MqttConsumer):

    async def connect(self):
        await self.subscribe('sensors', 2)

    async def receive(self, mqtt_message):
        topic = mqtt_message['topic']
        message = mqtt_message['payload'].decode('utf-8').split('#')

        if len(message) == 3:
            message = {
                'device': message[0],
                'gauge': message[1],
                'value': message[2],
            }
            await self.new_measure(message['gauge'], message['value'])
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
        f'user_1',
        {"type": "gauge_measure", "value": 502},
    )

    @database_sync_to_async    
    def new_measure(self, gauge, value):
        Measure(
                gauge=Gauge.objects.get(pk=gauge),
                value=value
            ).save()

    async def disconnect(self):
        await self.unsubscribe('sensors')


class LogsConsumer(AsyncWebsocketConsumer):
    async def connect(self):        
        self.user_id = self.scope["url_route"]["kwargs"]["user_id"]
        self.user_group_name = "user_%s" % self.user_id


        await self.channel_layer.group_add(
            self.user_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.user_group_name, self.channel_name)

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print(f'Web socket incoming data: {text_data_json}')
        message = text_data_json["message"]

        # Send message to room group
        await self.channel_layer.group_send(
            self.user_group_name,
            {
                "type": "gauge_measure",
                "message": message}
        )

    # Receive message from room group
    async def gauge_measure(self, event):
        message = event["value"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message}))