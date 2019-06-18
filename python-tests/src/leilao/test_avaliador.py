from unittest import TestCase
from .dominio import Usuario, Leilao, Lance


class test_avalia(TestCase):

    def setUp(self):
        self.user1 = Usuario('Fernando')
        self.user2 = Usuario('Mariel')
        self.leilao = Leilao ('Celular')

    def test_deve_retornar_o_maior_e_o_menor_valor_de_um_lance_quando_adicionados_em_ordem_crescente(self):
        lance1 = Lance(self.user1, 1000)
        lance2 = Lance(self.user2, 2000)
        self.leilao.propoe(lance1)
        self.leilao.propoe(lance2)

        menor_valor_esperado = 1000
        maior_valor_esperado = 2000
        self.assertEqual(maior_valor_esperado, self.leilao.maior_lance)
        self.assertEqual(menor_valor_esperado, self.leilao.menor_lance)

    def test_deve_retornar_o_maior_e_o_menor_lance_quando_forem_enviados_tres_lances(self):

        lance1 = Lance(self.user1, 1000)
        lance2 = Lance(self.user2, 2000)
        lance3 = Lance(self.user2, 3000)
        self.leilao.propoe(lance1)
        self.leilao.propoe(lance2)
        self.leilao.propoe(lance3)

        menor_valor_esperado = 1000
        maior_valor_esperado = 3000
        self.assertEqual(maior_valor_esperado, self.leilao.maior_lance)
        self.assertEqual(menor_valor_esperado, self.leilao.menor_lance)