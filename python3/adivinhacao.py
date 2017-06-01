total_tentativas = 3
numero_secreto = 42
rodada = 1

while rodada <= total_tentativas:
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
	rodada += 1
print("Fim do jogo")
