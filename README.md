# IoTTesis
IoT project guide. Technologies: Django Rest API, PostgreSQL, MQTT, ESP32. All running over Docker.

In the mqtt message follow th enext structure:

    "device_id#gauge_id#value"

    device_id: get on web page
    gauge_id: get on web page

### Django project steps:

- django-admin startproject <name> <path>
- environ vars:
        
        env = environ.Env()
        environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

        DEBUG = env.bool('DEBUG', False)  # True

- Allow all hosts: 

        ALLOWED_HOSTS = ['*']

- Templates:
        
        create var: TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
        add it to dirs: 'DIRS': [TEMPLATE_DIR],

- Database:
        
        DATABASES = {
            "default": {
                "ENGINE": os.environ.get("SQL_ENGINE", "django.db.backends.sqlite3"),
                "NAME": os.environ.get("SQL_DATABASE", BASE_DIR / "db.sqlite3"),
                "USER": os.environ.get("SQL_USER", "user"),
                "PASSWORD": os.environ.get("SQL_PASSWORD", "password"),
                "HOST": os.environ.get("SQL_HOST", "localhost"),
                "PORT": os.environ.get("SQL_PORT", "5432"),
            }
        }

```sh
run: python manage.py migrate
```

- Timezone: 

        TIME_ZONE = 'America/Guatemala'

- Static files:

        STATIC_URL = 'static/'
        STATIC_ROOT = 'static/'
        STATICFILES_DIRS = (
            BASE_DIR / "static",
        )
        STATICFILES_FINDERS = [
            'django.contrib.staticfiles.finders.FileSystemFinder',
            'django.contrib.staticfiles.finders.AppDirectoriesFinder',
        ]

 #### uncoment coment base_dir / "static" and run: python manage.py collectstatic
 #### comento and uncoment

- Media:

        MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
        MEDIA_URL = 'media/'

- Django-registration:

        ACCOUNT_ACTIVATION_DAYS = 7  # One day registration
        REGISTRATION_OPEN = True  # set to default value
        REGISTRATION_SALT = "registration"  # set to default value
    
- Emails:

        EMAIL_USE_TLS = True
        EMAIL_HOST = 'smtp.gmail.com'
        EMAIL_HOST_USER = 'racsogonzalez30@gmail.com    '
        EMAIL_HOST_PASSWORD = 'fenpnpmsxniepvwc'
        EMAIL_PORT = 587
    
- add apps:
        
        rest_framework, and run:python manage.py migrate
        django_registration
        webpack

