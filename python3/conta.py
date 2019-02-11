# -*- coding:utf-8 -*-

class Conta:

    def __init__(self, numero, titular, saldo, limite):
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.limite = limite

    def extrato(self):
        print ("Saldo de {0} do titular {1}".format(self.__saldo, self.__titular))

    def sacar(self, valor):
        self.__saldo -= valor

    def depositar(self, valor):
        self.__saldo += valor

    def transferir(self, valor, destino):
        self.sacar(valor)
        destino.depositar(valor)
