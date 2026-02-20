from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

# Create your views here.
def menu_page(request):
    return render(request, 'menu.html')
# function which will make a request