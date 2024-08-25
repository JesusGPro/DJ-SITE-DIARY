from django.contrib import admin
from .models import ChatMessage

class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('user', 'message', 'image')  # display title and date_time in the list view
    search_fields = ('user', 'message', 'created-at')  # enable search by title and content

admin.site.register(ChatMessage, ChatMessageAdmin)

