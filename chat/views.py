from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import ChatMessage
from .forms import ChatMessageForm, SearchForm
from django.db.models import Q

@login_required
def chat_view(request):
    request.chat_page = True
    if request.method == 'POST':
        form = ChatMessageForm(request.POST)
        if form.is_valid():
            message = form.save(commit=False)
            message.user = request.user
            message.save()
            return redirect('chat_view')
    else:
        form = ChatMessageForm()
    messages = ChatMessage.objects.all().order_by('-created_at')
    return render(request, 'chat/chat.html', {'form': form, 'messages': messages})

# @login_required
# def search_chat(request):
#     form = SearchForm()
#     records = ChatMessage.objects.all()
#     if request.method == 'POST':
#         form = SearchForm(request.POST)
#         word = request.POST.get('word', '')
#         q_object = Q(message__icontains=word)
#         records = ChatMessage.objects.filter(q_object)
#         return render(request, 'chat/search_chat_results.html', {'records': records, 'form': form})
#     return render(request, 'chat/chat.html', {'form': form})

@login_required
def search_chat(request):
    form = SearchForm()
    records = ChatMessage.objects.all()
    if request.method == 'POST':
        form = SearchForm(request.POST)
        word = request.POST.get('word', '')
        print("This is the word", word)
        q_object = Q(message__icontains=word)
        records = ChatMessage.objects.filter(q_object)
        return render(request, 'chat/search_chat_results.html', {'records': records, 'form': form})
    return render(request, 'chat/chat.html', {'form': form})