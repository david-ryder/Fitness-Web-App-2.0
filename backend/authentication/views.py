from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import ApiSerializer
from .models import Api

class ApiView(viewsets.ModelViewSet):
    serializer_class = ApiSerializer
    queryset = Api.objects.all()