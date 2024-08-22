from django.urls import path
from . import views

urlpatterns = [
    path('chat_view', views.chat_view, name='chat_view'),
    path('search_chat/', views.search_chat, name='search_chat'),
]