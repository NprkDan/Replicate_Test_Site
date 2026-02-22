from django.shortcuts import render

def home(request):
    return render(request, 'base.html')


def menu_page(request):
    return render(request, 'menu.html')

from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contacts.html')

def reservations(request):
    return render(request, 'reservations.html')

def subscribe(request):
    return render(request, 'subscription.html')