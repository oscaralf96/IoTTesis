from django.forms import ModelForm
from api.models import *

class EquipmentForm(forms.Form):
    class Meta:
        model = Equipment
        fields =['id' , 'name']