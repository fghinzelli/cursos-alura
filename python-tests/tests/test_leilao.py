from unittest import TestCase
from src.leilao.dominio import Usuario, Leilao, Lance


class test_avalia(TestCase):

    def setUp(self):
        self.user1 = Usuario('Fernando', 1000)
        self.user2 = Usuario('Mariel', 4000)
        self.leilao = Leilao ('Celular')

        self.lance1 = Lance(self.user1, 1000)
        self.lance2 = Lance(self.user2, 2000)
        self.lance3 = Lance(self.user1, 3000)

    def test_deve_retornar_o_maior_e_o_menor_valor_de_um_lance_quando_adicionados_em_ordem_crescente(self):
        self.leilao.propoe(self.lance1)
        self.leilao.propoe(self.lance2)

        menor_valor_esperado = 1000
        maior_valor_esperado = 2000
        self.assertEqual(maior_valor_esperado, self.leilao.maior_lance)
        self.assertEqual(menor_valor_esperado, self.leilao.menor_lance)

    def test_nao_deve_permitir_propor_um_lance_com_valor_menor_ao_anterior(self):
        with self.assertRaises(ValueError):
            self.leilao.propoe(self.lance2)
            self.leilao.propoe(self.lance1)

    def test_deve_retornar_o_maior_e_o_menor_lance_quando_forem_enviados_tres_lances(self):
        self.leilao.propoe(self.lance1)
        self.leilao.propoe(self.lance2)
        self.leilao.propoe(self.lance3)

        menor_valor_esperado = 1000
        maior_valor_esperado = 3000
        self.assertEqual(maior_valor_esperado, self.leilao.maior_lance)
        self.assertEqual(menor_valor_esperado, self.leilao.menor_lance)

    def test_deve_permitir_propor_lances_caso_o_leilao_nao_tenha_lances(self):
        self.leilao.propoe(self.lance1)
        quantidade_lances_recebido = len(self.leilao.lances)
        self.assertEqual(1, quantidade_lances_recebido)

    def test_deve_permitir_propor_lance_caso_o_ultimo_usuario_seja_diferente(self):
        self.leilao.propoe(self.lance1)
        self.leilao.propoe(self.lance2)
        quantidade_lances_recebido = len(self.leilao.lances)
        self.assertEqual(2, quantidade_lances_recebido)

    def test_nao_deve_permitir_propor_lance_caso_o_usuario_seja_o_mesmo(self):
        
        with self.assertRaises(ValueError):
            self.leilao.propoe(self.lance1)
            self.leilao.propoe(self.lance1)
