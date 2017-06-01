total_tentativas = 3
numero_secreto = 42
total_tentativas = 3

for rodada in range(1, total_tentativas + 1):
	print("Tentativa {} de {}".format(rodada, total_tentativas))
	chute = input("Digite um número")
	chute = int(chute)

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
