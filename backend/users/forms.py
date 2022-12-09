"""User forms."""

# Django
from django import forms

# Models
from django.forms import ModelForm
from django.contrib.auth.models import User
from .models import Profile

from django_registration.forms import RegistrationForm

class CustomUserForm(ModelForm):

    password = forms.CharField(
        max_length=70,
        widget=forms.PasswordInput()
    )
    password_confirmation = forms.CharField(
        max_length=70,
        widget=forms.PasswordInput()
    )

    def clean(self):
        """Verify password confirmation match."""
        data = super().clean()

        password = data['password']
        password_confirmation = data['password_confirmation']

        if password != password_confirmation:
            raise forms.ValidationError('Passwords do not match.')
        return data        

    def save(self):
        """Create user and profile."""
        data = self.cleaned_data        
        data.pop('password_confirmation')

        user = User.objects.create_user(**data)
        profile = Profile(user=user)
        profile.save()

    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileForm(forms.Form):
    """Profile form."""

    website = forms.URLField(max_length=200, required=True)
    biography = forms.CharField(max_length=500, required=False)
    phone_number = forms.CharField(max_length=20, required=False)
    picture = forms.ImageField(required=False)