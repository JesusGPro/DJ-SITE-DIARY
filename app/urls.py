from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # list view
    path('add', views.add_record, name='add_record'),  # list view
    path('records/', views.records_list, name='records_list'),
    path('record/<pk>/edit/', views.edit_record, name='edit_record'),
    path('records/delete/', views.delete_records, name='delete_records'),
    path('search/', views.search_records, name='search_records'),
    path('search_results/', views.search_records, name='search_results'),
    path('export_to_excel/', views.export_to_excel, name='export_to_excel'),
    path('boreholes', views.boreholes, name='boreholes'),  # list view
    path('login/', views.login_request, name='login_request'),
    path('logout/', views.logout_request, name='logout_request'),
    
]