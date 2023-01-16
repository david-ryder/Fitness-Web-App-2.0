from rest_framework import serializers

from .models import UserModel

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'username', 'password')