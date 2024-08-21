from django.contrib import admin
from .models import SiteDiary

class SiteDiaryAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'date_time')  # display title and date_time in the list view
    search_fields = ('title', 'content')  # enable search by title and content

admin.site.register(SiteDiary, SiteDiaryAdmin)


