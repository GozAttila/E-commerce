from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairView, UserCreate, AuthenticationTestView, LogoutAndBlacklistRefreshTokenForUserView, GetLocalUser

urlpatterns = [
    path('user/create/', UserCreate.as_view(), name='create_user'),
    path('user/getlocaluser/', GetLocalUser.as_view(), name='get_local_user'),
    path('token/obtain/', ObtainTokenPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('auth_test/', AuthenticationTestView.as_view(), name='auth_test'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(),
         name='blacklist'),
]
