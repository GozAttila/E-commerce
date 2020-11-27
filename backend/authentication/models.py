from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True, default='example@email.com')
    is_worker = models.BooleanField(default=False)

    username = models.CharField(
        unique=False, blank=True, null=True, max_length=50)

    def __str__(self):
        return f'User ID: {self.id} email: {self.email} Worker: {self.is_worker}'
