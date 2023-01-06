#include <WiFi.h>
#include <PubSubClient.h>
#include <Wire.h>

// Replace the next variables with your SSID/Password combination
const char* ssid = "Extender2";
const char* password = "MiExtender16";

// Add your MQTT Broker IP address, example:
//const char* mqtt_server = "192.168.1.144";
const char* mqtt_server = "192.168.1.190"; //65
//const char* mqtt_server = "broker.emqx.io";

const int ledPin = 4;

const char* data = "";
char integer_string[32];
char other_string[64] = "";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  
  setup_wifi();
  client.setServer(mqtt_server, 1884);
  client.setCallback(callback);
  
  pinMode(ledPin, OUTPUT);
}

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}


void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(" Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
  }
  Serial.println();
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("aaa")) {
      Serial.println("connected");
      // Subscribe
      client.subscribe("sensors");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
      Serial.println(WiFi.status());
    }
  }
}


void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  strcpy(other_string, "2#2#");
  sprintf(integer_string, "%d", random(30, 50));
  strcat(other_string, integer_string);
  data = other_string; // "2#2#"; // + random(30, 50);
  // data.c_str();
  Serial.println("------------------------------------");
  Serial.println("el dato a enviar por MQTT: ");
  Serial.println(data);
  Serial.println("------------------------------------");
  // client.publish("sensors", data.c_str());
  client.publish("sensors", data);
  delay(500);
}
