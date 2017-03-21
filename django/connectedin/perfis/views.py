from django.shortcuts import render

def index(request):
	return render(request, 'perfis/index.html')

def exibir(request):
	return render(request, 'perfis/perfil.html')