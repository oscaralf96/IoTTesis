# Django
from django.contrib.auth import views as auth_views
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.urls import reverse

# models
from django.contrib.auth.models import User
from users.models import Profile

# forms
from .forms import CustomUserForm, ProfileForm, RegistrationForm
# views
from django_registration.backends.activation import views


class RegistrationView(views.RegistrationView):
    template_name='users/registration.html'


class LoginView(auth_views.LoginView):
    """Login view."""

    template_name = 'users/login.html'


@login_required
def logout_view(request):
    logout(request)
    return redirect('users:login')

@login_required()
def update_profile(request): 
    """Update a user's profile view."""
    profile = request.user.profile

    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES)
        if form.is_valid():
            data = form.cleaned_data

            profile.website = data['website']
            profile.phone_number = data['phone_number']
            profile.biography = data['biography']
            profile.picture = data['picture']
            profile.save()

            url = reverse('management:equipment')
            return redirect(url)

    else:
        form = ProfileForm()

    return render(
        request=request, 
        template_name='equipment/update_profile.html', 
        context={
            'profile': profile,
            'form': form
        }
    )