from django.shortcuts import render, redirect
from .forms import SiteDiaryForm, SearchForm
from .models import SiteDiary
from datetime import date
from django.contrib import messages
from django.shortcuts import get_object_or_404
from django.db.models import Q
# to export to excell
import pandas as pd
import sqlite3
from datetime import datetime
from django.http import HttpResponse

def home(request):
    today = date.today()
    day_name = today.strftime("%A") + " " + str(today)
    return render(request, "app/home.html", {'day': day_name})


def add_record(request):
    form = SiteDiaryForm(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = SiteDiaryForm()
    return render(request, 'app/record.html', {'form': form})    
        
def edit_record(request, pk):
    record = SiteDiary.objects.get(pk=pk)
    if request.method == 'POST':
        form = SiteDiaryForm(request.POST, instance=record)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = SiteDiaryForm(instance=record)
    return render(request, 'app/record_edit.html', {'form': form})

def records_list(request):
    records = SiteDiary.objects.all().order_by('-date_time')
    return render(request, 'app/records_list.html', {'records': records})


def delete_records(request):
    if request.method == 'POST':
        record_keys = request.POST.getlist('record_keys')
        records_to_delete = SiteDiary.objects.filter(id__in=record_keys)
        deleted_count, _ = records_to_delete.delete()
        if deleted_count > 0:
            messages.success(request, 'Records deleted successfully')
        else:
            messages.error(request, 'No records deleted')
        return redirect('records_list')
    else:
        form = SiteDiaryForm()
    return render(request, 'app/records_list.html', {'form': form})


def search_records(request):
    form = SearchForm()
    records = SiteDiary.objects.all()

    if request.method == 'POST':
        form = SearchForm(request.POST)
        
        word_1 = request.POST.get('word_1', '')
        word_2 = request.POST.get('word_2', '')
        word_3 = request.POST.get('word_3', '')

        query = ''
        if word_1:
            query += word_1
        if word_2:
            query += ' ' + word_2
        if word_3:
            query += ' ' + word_3

        print("Query:", query)
        q_objects = Q(content__icontains=word_1)
        if word_2:
            q_objects &= Q(content__icontains=word_2)
        if word_3:
            q_objects &= Q(content__icontains=word_3)
        records = SiteDiary.objects.filter(q_objects)
        return render(request, 'app/search_results.html', {'records': records})
    return render(request, 'app/search.html', {'form': form})


def export_to_excel(request):
    table_name = 'app_sitediary'
    connection = sqlite3.connect("db.sqlite3")
    data_frame = pd.read_sql(f'SELECT * FROM {table_name}', connection)

    try:
        # Generate data as CSV
        csv_data = data_frame.to_csv(index=False)

        # Create a downloadable CSV response
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename={table_name}_{datetime.now().strftime("%Y-%m-%d_%H-%M-%S")}.csv'
        response.write(csv_data.encode('utf-8'))

        # Success message can be displayed on the template
        messages.success(request, "Data exported successfully! You can download the CSV file.")
        return response

    except Exception as e:
        messages.error(request, f"Error exporting data to CSV: {e}")
        return render(request, 'app/home.html')

    finally:
        connection.close()


def boreholes(request):
    return render(request, "app/boreholes.html")

