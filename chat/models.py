from django.db import models
from django.contrib.auth.models import User

class ChatMessage(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    message = models.TextField()
    image = models.ImageField(upload_to='chat_images/', blank=True, null=True)  # Add an ImageField
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message