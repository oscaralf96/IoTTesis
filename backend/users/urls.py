from django.urls import path
from . import views


urlpatterns = [
    path(
        route='register/',
        view=views.RegistrationView.as_view(),
        name='registration'
    ),
    path(
        route='login/',
        view=views.LoginView.as_view(),
        name='login'),
    path(
        route='logout/',
        view=views.logout_view,
        name='logout'),
    path(
        route='update_profile/',
        view=views.update_profile,
        name='update_profile'),
]
