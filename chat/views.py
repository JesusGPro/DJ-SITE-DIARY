from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import ChatMessage
from .forms import ChatMessageForm, SearchForm
from django.db.models import Q


# @login_required
# def chat_view(request):
#     request.chat_page = True
#     if request.method == 'POST':
#         form = ChatMessageForm(request.POST)
#         if form.is_valid():
#             message = form.save(commit=False)
#             message.user = request.user
#             message.save()
#             return redirect('chat_view')
#     else:
#         form = ChatMessageForm()
#     messages = ChatMessage.objects.all().order_by('-created_at')
#     return render(request, 'chat/chat.html', {'form': form, 'messages': messages})

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

@login_required
def chat_view(request):
    request.chat_page = True
    if request.method == 'POST':
        form = ChatMessageForm(request.POST, request.FILES)
        if form.is_valid():
            message = form.save(commit=False)
            message.user = request.user
            if 'image' in request.FILES:
                    image = request.FILES['image']
                    if image.size > 5 * 1024 * 1024:  # 5MB
                        return render(request, 'chat/error.html', {'error': 'Due to available space in server, cannot be uploaded files bigger than 5 MB. Sorry.'})
                    message.image = image
            message.save()
            return redirect('chat_view')
        else:
            return render(request, 'chat/error.html', {'error': 'Not valid. You have to write any chat with or without file'})
    else:
        form = ChatMessageForm()
    messages = ChatMessage.objects.all().order_by('-created_at')
    return render(request, 'chat/chat.html', {'form': form, 'messages': messages})
