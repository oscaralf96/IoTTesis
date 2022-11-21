import paho.mqtt.client as mqtt

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("topic/")

client = mqtt.Client("P1")
client.on_connect = on_connect

client.connect("localhost", 1884, 60)
print('connected')

client.publish("topic/","ON")

