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
      DJANGO_ALLOWED_HOSTS=LOCALHOST 127.0.0.1 [::1]

      SQL_ENGINE=django.db.backends.postgresql
      SQL_DATABASE=science
      SQL_USER=super
      SQL_PASSWORD=super
      SQL_HOST=db
      SQL_PORT=5432

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
  - El enlace tiene la siguiente estructura:
  - Modificar a:

- Ingresar con las credenciales proporcionadas.

- Finalizar la configuración del perfil.

- Agregar Elementos a las tablas boards, sensors por medio de la interfaz proporcionada por django rest framework. Las rutas son:
  - <host>:8080/api/boards/
  - <host>:8080/api/sensors/

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