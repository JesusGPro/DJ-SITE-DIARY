from django.db import models
from django.utils import timezone

class SiteDiary(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
