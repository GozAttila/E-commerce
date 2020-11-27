from django.urls import path
from .views import ItemListView, ItemView

urlpatterns = [
    path('item/', ItemListView.as_view(), name='all_items'),
    path('item/<int:item_id>/', ItemView.as_view(), name='get_specific_item'),

]

# from django.urls import path, include
# from rest_framework import routers
# from .views import ItemListView

# router = routers.DefaultRouter()
# router.register(r'item', ItemListView)

# urlpatterns = [
#     path('', include(router.urls)),
# ]
