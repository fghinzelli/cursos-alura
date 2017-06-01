print("************************************")
print("* Bem vindo ao jogo de adivinhacao *")
print("************************************")
total_tentativas = 3
numero_secreto = 42
total_tentativas = 3

for rodada in range(1, total_tentativas + 1):
	print("Tentativa {} de {}".format(rodada, total_tentativas))
	chute = input("Digite um número de 1 a 100: ")

	chute = int(chute)
	if(chute < 1 or chute > 100):
		print("Você deve digitar um número entre 1 e 100!")
		continue

	acertou = numero_secreto == chute
	menor = numero_secreto < chute
	maior = numero_secreto > chute
	if acertou:
		print("Você acertou")
		break
	else:
		if menor:
			print("Você errou! O número é menor")
		elif maior:
			print("Você errou! O número é maior")

print("Fim do jogo")
