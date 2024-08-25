from django.contrib import admin
from .models import SiteDiary

admin.site.site_header = 'ABCC L7 Tender Administration' # default: "Django Administration"
admin.site.index_title = 'ABCC L7 Tender Dashboard' # default: "Site administration"
admin.site.site_title = 'ABCC L7 Tender Admin' # default: "Django site admin"

class SiteDiaryAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'date_time')  # display title and date_time in the list view
    search_fields = ('title', 'content')  # enable search by title and content

admin.site.register(SiteDiary, SiteDiaryAdmin)


