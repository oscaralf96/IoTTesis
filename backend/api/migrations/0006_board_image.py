# Generated by Django 4.1.3 on 2022-11-26 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_device_board_alter_device_equipment_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='board',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='boards/images'),
        ),
    ]
