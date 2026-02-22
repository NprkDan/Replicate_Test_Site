
from django.urls import path
from . import views

urlpatterns = [
    # path(ścieżka, funkcja_widoku, name="to_jest_imie_szukane_przez_django")
    path('', views.home, name='home'),
    path('contact/', views.contact, name='contact'),
    path('reservations/', views.reservations, name='reservations'),
    path('subscribe/', views.subscribe, name='subscribe'),
]