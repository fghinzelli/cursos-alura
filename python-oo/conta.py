class Conta:

    def __init__(self, numero, titular, saldo, limite):
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite

    def depositar(self, valor):
        self.saldo += valor

    def sacar(self, valor):
        self.saldo += valor

    def extrato(self):
        print("{0}, seu saldo é de R$ {1}".format(self.titular, self.saldo))

