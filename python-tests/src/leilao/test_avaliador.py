from unittest import TestCase
from .dominio import Usuario, Leilao, Lance, Avaliador


class test_avalia(TestCase):

    def setUp(self):
        self.user1 = Usuario('Fernando')
        self.user2 = Usuario('Mariel')
        self.leilao = Leilao ('Celular')
        self.avaliador = Avaliador()

    def test_deve_retornar_o_maior_e_o_menor_valor_de_um_lance_quando_adicionados_em_ordem_crescente(self):
        lance1 = Lance(self.user1, 1000)
        lance2 = Lance(self.user2, 2000)
        self.leilao.lances.append(lance1)
        self.leilao.lances.append(lance2)
        self.avaliador.avalia(self.leilao)

        menor_valor_esperado = 1000
        maior_valor_esperado = 2000
        self.assertEqual(maior_valor_esperado, self.avaliador.maior_lance)
        self.assertEqual(menor_valor_esperado, self.avaliador.menor_lance)

    def test_deve_retornar_o_maior_e_o_menor_lance_quando_forem_enviados_tres_lances(self):

        lance1 = Lance(self.user1, 1000)
        lance2 = Lance(self.user2, 2000)
        lance3 = Lance(self.user2, 3000)
        self.leilao.lances.append(lance1)
        self.leilao.lances.append(lance2)
        self.leilao.lances.append(lance3)
        self.avaliador.avalia(self.leilao)

        menor_valor_esperado = 1000
        maior_valor_esperado = 3000
        self.assertEqual(maior_valor_esperado, self.avaliador.maior_lance)
        self.assertEqual(menor_valor_esperado, self.avaliador.menor_lance)