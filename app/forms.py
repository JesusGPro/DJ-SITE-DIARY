from django import forms
from .models import SiteDiary

class SiteDiaryForm(forms.ModelForm):
    class Meta:
        model = SiteDiary
        fields = ('title', 'content')
        record_keys = forms.ModelMultipleChoiceField(queryset=SiteDiary.objects.all(), widget=forms.CheckboxSelectMultiple)

class SearchForm(forms.Form):
    word_1 = forms.CharField(max_length=30, required=True)
    word_2 = forms.CharField(max_length=30, required=False)
    word_3 = forms.CharField(max_length=30, required=False)