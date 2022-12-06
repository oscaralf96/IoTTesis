from mqttasgi.consumers import MqttConsumer
from channels.db import database_sync_to_async

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

        print('Received a message at topic:', mqtt_message['topic'])
        print('With payload', mqtt_message['payload'])
        print('And QOS:', mqtt_message['qos'])

        await self.publish(
            'response/' + mqtt_message['topic'],
            mqtt_message['payload'],
            qos=mqtt_message['qos'],
            retain=False
        )

    @database_sync_to_async    
    def new_measure(self, gauge, value):
        Measure(
                gauge=Gauge.objects.get(pk=gauge),
                value=value
            ).save()

    async def disconnect(self):
        await self.unsubscribe('sensors')