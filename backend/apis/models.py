from django.db import models
import shortuuid

def generate_short_id():
    return shortuuid.uuid()[:12]

# Create your models here.
class UserModel(models.Model):
    short_id = models.CharField(primary_key=True, max_length=12, unique=True, default=generate_short_id)
    email = models.EmailField(max_length=200, unique=True, blank=False)
    username = models.CharField(max_length=200, unique=True, blank=False)
    password = models.CharField(max_length=200, blank=False)
    first_name = models.CharField(max_length=200, blank=False, default='FirstName')
    last_name = models.CharField(max_length=200, blank=False, default='LastName')

    def __str__(self):
        return self.username