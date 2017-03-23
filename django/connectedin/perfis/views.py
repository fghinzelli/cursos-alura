from django.shortcuts import render
from .models import Perfil

def index(request):
	return render(request, 'perfis/index.html')

def exibir(request, perfil_id):
	perfil = Perfil()
	if (perfil_id == '1'):
		perfil = Perfil('Fernando Ghinzelli', 'fghinzelli@gmail.com', '7777', 'MP')
	if perfil_id == '2':
		perfil = Perfil('Romulo Henrique', 'romulo@romulo.com.br', '888888', 'Caelum')

	print("Nome: " + perfil.nome)
	return render(request, 'perfis/perfil.html', {'perfil': perfil})
