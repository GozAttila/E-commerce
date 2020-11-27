import random
import time
# from django.utils.dateformat import format

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from shop.models import OrderItem
from .serializers import MyTokenObtainPairSerializer, UserSerializer
from .models import User


def code_generator(length=12):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


def generate_guest_user_code():
    order_item_list = OrderItem.objects.all()
    code = code_generator()
    timestamp = time.time()
    guest_user = f'Guest.{code}.{timestamp}'
    while guest_user in order_item_list:
        code = code_generator()
        guest_user = f'Guest.{code}.{timestamp}'
    return guest_user


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class GetLocalUser(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get(self, request):
        user_list = User.objects.all()
        # serializer = UserSerializer(request.user)
        # serializer = UserSerializer(user_list, many=True)
        print("Current user: ", request.user)
        if request.user in user_list:
            response = {"localuser": "user"}
        else:
            response = {"localuser": generate_guest_user_code()}
        return Response(data=response, status=status.HTTP_200_OK)
'''
TODO:   if user = user, check, if user logged in, if not, generate guest user code
        if user = guest, check if it is in the order_item_list, if not, generate new guest user code
        when user logging in and there are items in the basket as guest and as logged in user, ask what to keep
        when ordering items, clear the order_item_list
        order available only as logged in user
        at logout, clear the localstorage "user" variable
'''


class ObtainTokenPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthenticationTestView(APIView):

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(data={"message": "You are in", "user": serializer.data}, status=status.HTTP_200_OK)
