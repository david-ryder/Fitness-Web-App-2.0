from rest_framework import serializers

from .models import UserModel

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserModel
        fields = ('short_id', 'email', 'username', 'password', 'first_name', 'last_name')