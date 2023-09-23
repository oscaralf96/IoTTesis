# Proyecto finalizado del trabajo de graduación con titulo "DISEÑO DE UN MANUAL DE APOYO PARA EL CURSO DE PROYECTOS COMPUTACIONALES APLICADOS A I.E. ENFOCADO EN IOT POR MEDIO DE SISTEMAS ASADOS EN CONTENEDORES"

El proyecto incluye las siguientes tecnológias: Django Rest API, PostgreSQL, MQTT, ESP32. Todas ejecutadas con Docker.

En los mensajes MQTT utilizar el siguiente formato:

    "device_id#gauge_id#value"

    device_id: get on web page
    gauge_id: get on web page

## Insstalación del sistema:

- Clonar el proyecto:
      
      git clone https://github.com/oscaralf96/IoTTesis.git

- Crear archivo backend/.env con el siguiente contenido:

     
      DEBUG=0
      DJANGO_ALLOWED_HOSTS=LOCALHOST 34.132.50.139 127.0.0.1 [::1]

      SQL_ENGINE=django.db.backends.postgresql
      SQL_DATABASE=science
      SQL_USER=super
      SQL_PASSWORD=super
      SQL_HOST=db
      SQL_PORT=5432

- En el archivo anterior modificar la ip por la del servidor en uso.

- Levantar servicios:

    docker compose up -d --build

- Migrar definiciones a la base de datos:

      docker compose exec backend python manage.py migrate

- Copiar archivos estáticos:

      docker compose exec backend python manage.py collectstatic
- Configurar SMTP:

```python
#emails
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER", "user@email.com")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD", "password")
EMAIL_PORT = 587
```
Si se utliziza una cuenta de Google, seguier las instrucciones en el siguiente enlace: [click.](https://support.google.com/accounts/answer/185833?hl=es-419)

- Registrar usuario en la ruta "<host_IP>:8080/users/register/"

- Activar cuenta con el enlace enviado al correo electrónico:
  - El enlace tiene la siguiente estructura: ://34.132.50.139/users/activate/Im9zY2FyIg:1qjugH:_gt6JUVvqGHEnAie0BA3WKkXm9F1COxv8jOQSGC36j8
  - Modificar a: http://34.132.50.139:8080/users/activate/Im9zY2FyIg:1qjugH:_gt6JUVvqGHEnAie0BA3WKkXm9F1COxv8jOQSGC36j8

- Ingresar con las credenciales proporcionadas.

- Finalizar la configuración del perfil.

- Agregar Elementos a las tablas boards, sensors por medio de la interfaz proporcionada por django rest framework. Las rutas son:
  - <host>:8080/api/boards/
    - ESP32:ESP32 es la denominación de una familia de chips SoC de bajo costo y consumo de energía, con tecnología Wi-Fi y Bluetooth de modo dual integrada.
    - Arduino Nano:The Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328 (Arduino Nano 3.x).
    -Arduino Uno:Arduino UNO is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header and a reset button.
    -Raspberry Pi Pico:The Raspberry Pi Pico series is a range of tiny, fast, and versatile boards built using RP2040, the flagship microcontroller chip designed by Raspberry Pi in the UK
    - SMT32:The STM32 family of 32-bit microcontrollers based on the Arm® Cortex®-M processor is designed to offer new degrees of freedom to MCU users
  - <host>:8080/api/sensors/
    - LM35:Temperatura
    - HC-SR04:Humedad
    - DHT11:Longitud
    - MF01;Fuerza
    - YF-S201:Caudal

- En el sitio en la sección "Equipment" gestionar el equipo a utilizar según lo requerido.
  - Crear un equipo.
  - Agregar dispositivos (Devices).
  - Agregar medidores (Gauges).

- Inicializar servicio MQTT:
  - docker compose exec backend mqttasgi -H mqtt_brocker -p 1883 backend.asgi:application

- Configurar dispositivo para enviar mensajes al topic correcto:
  - La estructura esperado es: "device_id#gauge_id#value". Estos datos pueden observarse en la página web, al lado de cada dispositivo y medidor.

- Configurar Graphana:
  - En el puerto 3000 de nuestro servidor estará disponible graphana. Ingresar con usuario y contraseña "admin" y actualizar contraseña.

  - Agregar nueva fuente de datos:
    - La fuente de datos es una base de datos en PostgreSQ. El el menú lateral selecionamos "connections"  y luego "Data source", buscamos y agregamos PostgreSQL. 
    - Editamos los campos "Host" con dbÑ5432, "Database" con science, "User" con super y colocamos la contraseña. En TLS/SSL Mode colocamos "disable". 
    - Guardamos y porbamos la conexión.
  - Creamos un nuevo dashboard:
    - En el menú lateral "Dashboard".
    - En la nueva pantalla "new" , "new dashboard".
    - En la nueva pantall "Add visualization".
    - Selecionamos nuestra base de datos, y ocnfiguramos la consulta según deseemos la gráfica.