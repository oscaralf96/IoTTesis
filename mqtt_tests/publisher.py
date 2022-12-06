import paho.mqtt.client as mqtt
from random import randint
import time

host = "localhost"
topic = "sensors"

board_id = "1"
sensor_id = "6"

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe(topic)

client = mqtt.Client(board_id)
client.on_connect = on_connect

client.connect(host, 1884, 60)
print('connected')

for i in range(10):
    client.publish(topic,f"{board_id}#{sensor_id}#{randint(25, 50)}")
    time.sleep(2)

