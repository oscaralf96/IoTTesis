import json
from channels.generic.websocket import AsyncWebsocketConsumer

class LogsConsumer(AsyncWebsocketConsumer):
    async def connect(self):        
        self.device_id = self.scope["url_route"]["kwargs"]["device_id"]
        self.device_group_name = "device_%s" % self.device_id
        print(self.device_group_name, self.device_id)
        await self.channel_layer.group_add(
            self.device_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.device_group_name, self.channel_name)

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print(f'Web socket incoming data: {text_data_json}')
        message = text_data_json["message"]

        # Send message to room group
        await self.channel_layer.group_send(
            self.device_group_name,
            {
                "type": "gauge_measure",
                "message": message}
        )

    # Receive message from room group
    async def gauge_measure(self, event):
        data = event["data"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"data": data}))