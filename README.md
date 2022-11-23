# IoTTesis
IoT project guide. Technologies: Django Rest API, PostgreSQL, MQTT, ESP32

In the mqtt message follow th enext structure:

    "board_id#sensor_id#value"

    board_id: get on web page
    sensor_id: get on web page

Django project steps:

    1. django-admin startproject <name> <path>
    2. environ vars:
        
        # Initialise environment variables
        env = environ.Env()
        environ.Env.read_env(os.path.join(BASE_DIR, '.env'))
        
        DEBUG = env.bool('DEBUG', False)  # True

    3. Allow all hosts: 

        ALLOWED_HOSTS = ['*']

    4. Templates:
        
        create var: TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
        add it to dirs: 'DIRS': [TEMPLATE_DIR],

    5. Database:
        
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
# run: python manage.py migrate

    6. Timezone: 

        TIME_ZONE = 'America/Guatemala'

    7. Static files:

        STATIC_URL = 'static/'
        # STATIC_ROOT = 'static/'
        STATICFILES_DIRS = (
            BASE_DIR / "static",
        )
        STATICFILES_FINDERS = [
            'django.contrib.staticfiles.finders.FileSystemFinder',
            'django.contrib.staticfiles.finders.AppDirectoriesFinder',
        ]

 # uncoment coment base_dir / "static" and run: python manage.py collectstatic
 # comento and uncoment

    8. Media:

        MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
        MEDIA_URL = 'media/'

    9. Django-registration:

        # django-registration
        ACCOUNT_ACTIVATION_DAYS = 7  # One day registration
        REGISTRATION_OPEN = True  # set to default value
        REGISTRATION_SALT = "registration"  # set to default value
    
    10. Emails:

        EMAIL_USE_TLS = True
        EMAIL_HOST = 'smtp.gmail.com'
        EMAIL_HOST_USER = 'racsogonzalez30@gmail.com    '
        EMAIL_HOST_PASSWORD = 'fenpnpmsxniepvwc'
        EMAIL_PORT = 587
    
    11. add apps:
        
            rest_framework, and run:python manage.py migrate
            django_registration
            webpack

