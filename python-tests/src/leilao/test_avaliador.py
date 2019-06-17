from unittest import TestCase
from dominio import Usuario, Leilao, Lance, Avaliador


class test_avalia(TestCase):

    def test_ok(self):

        user1 = Usuario('Fernando')
        user2 = Usuario('Mariel')

        lance_user1 = Lance(user1, 1000)
        lance_user2 = Lance(user2, 2000)

        leilao = Leilao ('Celular')

        leilao.lances.append(lance_user1)
        leilao.lances.append(lance_user2)
        

        avaliador = Avaliador()
        avaliador.avalia(leilao)

        menor_valor_esperado = 1000
        maior_valor_esperado = 2000

        self.assertEqual(maior_valor_esperado, avaliador.maior_lance)
        self.assertEqual(menor_valor_esperado, avaliador.menor_lance)