from django.shortcuts import render
from rest_framework import status, permissions, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView


from .serializers import ItemSerializer
from .models import Item
# Create your views here.


class ItemListView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get(self, request):
        item_list = Item.objects.all()
        serializer = ItemSerializer(item_list, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

# class ItemListView(viewsets.ModelViewSet):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()

#     queryset = Item.objects.all()
#     serializer_class = ItemSerializer

class ItemView(RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_url_kwarg = 'item_id'
