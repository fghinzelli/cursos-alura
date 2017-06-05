import random

print("************************************")
print("* Bem vindo ao jogo de adivinhacao *")
print("************************************")

numero_secreto = random.randrange(1, 100)
total_tentativas = 0
pontos = 1000

print("Qual o nível de dificuldade?")
print("(1) Fácil (2) Médio (3) Difícil")

nivel = int(input("Defina o nível: "))

if nivel == 1:
    total_tentativas = 20
elif nivel == 2:
    total_tentativas = 10
else:
    total_tentativas = 5

for rodada in range(1, total_tentativas + 1):
    print("Tentativa {} de {}".format(rodada, total_tentativas))
    chute = input("Digite um número de 1 a 100: ")

    chute = int(chute)
    if (chute < 1 or chute > 100):
        print("Você deve digitar um número entre 1 e 100!")
        continue

    acertou = numero_secreto == chute
    menor = numero_secreto < chute
    maior = numero_secreto > chute
    if acertou:
        print("Você acertou e fez {} pontos!".format(pontos))
        break
    else:
        if menor:
            print("Você errou! O número é menor")
        elif maior:
            print("Você errou! O número é maior")
        pontos_perdidos = round(abs(numero_secreto - chute) / 3)
        pontos = pontos - pontos_perdidos

print("Fim do jogo")
