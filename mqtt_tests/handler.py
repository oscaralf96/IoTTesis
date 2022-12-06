import paho.mqtt.client as mqtt
import platform
import logging
import subprocess
import sys

import inspect

topic = "sensors"

logging.basicConfig(level=logging.INFO)

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    logging.info("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    if client.subscribe(topic):
        logging.info(f"subcribed to: {topic}")
    if client.subscribe(f'response/{topic}'):
        logging.info(f"subcribed to: response/{topic}")


# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg)
    # subprocess.call('clear')  # subprocess.run(['clear'])

    #logging.info(f"New message from: {client._username}:{userdata}")

    msg_data = msg.payload.decode().split("#")

    logging.info(
        f"""
        message received from: {msg.topic}
        board id:    {msg_data[0]}
        sensor id:   {msg_data[1]}
        value:       {msg_data[2]}""")

try:
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message

    client.connect("localhost", 1884, 60)
    print('connected')
    client.loop_forever()
except KeyboardInterrupt:
    logging.warning("keyboard Interrupt")
    sys.exit()