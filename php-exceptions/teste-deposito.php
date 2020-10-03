<?php

use Alura\Banco\Modelo\Conta\{ContaPoupanca, ContaCorrente, Titular, SaldoInsuficienteException};
use Alura\Banco\Modelo\{CPF, Endereco};

require_once 'autoload.php';

$contaCorrente = new ContaCorrente(
  new Titular(
    new CPF('123.456.789-00'),
    'Fernando Ghinzelli', 
    new Endereco('Cidade', 'Bairro', 'Rua', 'numero')
  )
);

try {
  $contaCorrente->deposita(-100);
} catch (InvalidArgumentException $exception) {
  echo "Valor a depositar precisa ser positivo";
}