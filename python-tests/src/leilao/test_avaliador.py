from unittest import TestCase

class teste1(TestCase):

    def test_ok(self):

        user1 = Usuario('Fernando')
        user2 = Usuario('Mariel')

        lance_user1 = Lance(user1, 1000)
        lance_user2 = Lance(user2, 2000)

        leilao = Leilao ('Celular')

        leilao.lances.append(lance_user1, lance_user2)

        self.assertEqual(leilao.lances)