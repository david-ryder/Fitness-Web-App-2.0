from django.db import models

# Create your models here.
class UserModel(models.Model):
    email = models.EmailField(max_length=200, unique=True, blank=False)
    username = models.CharField(max_length=200, unique=True, blank=False)
    password = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.username