# -*-coding:utf-8 -*-

from dominio import Usuario, Leilao, Lance, Avaliador


user1 = Usuario('Gui')
user2 = Usuario('Yuri')

lance_user1 = Lance(user1, 1000)
lance_user2 = Lance(user2, 2000)

leilao = Leilao ('Celular')

leilao.lances.append(lance_user2)
leilao.lances.append(lance_user1)



for lance in leilao.lances:
    print(f'O usuário {lance.usuario.nome} deu um lance de {lance.valor}')

avaliador = Avaliador()
avaliador.avalia(leilao)

print(f'Maior lance: {avaliador.maior_lance}')
print(f'Menor lance: {avaliador.menor_lance}')