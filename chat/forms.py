from django import forms
from .models import ChatMessage

class ChatMessageForm(forms.ModelForm):
    class Meta:
        model = ChatMessage
        fields = ('message',)

class SearchForm(forms.Form):
    word = forms.CharField(max_length=30, required=True)