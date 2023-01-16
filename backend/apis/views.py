from rest_framework import viewsets

from .serializers import UserSerializer
from .models import UserModel

class UserViewset(viewsets.ModelViewSet):

    queryset = UserModel.objects.all()

    serializer_class = UserSerializer