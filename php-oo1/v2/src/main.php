<?php

require 'Conta.php';
require 'Titular.php';
require 'Cpf.php';

$titular1 = new Titular(new Cpf('123.456.789-10'), 'Fernando');
$conta1 = new Conta($titular1);
$conta1->depositar(100);
$conta1->sacar(20);

echo $conta1->recuperaNomeTitular() . PHP_EOL;
echo $conta1->recuperaCpfTitular() . PHP_EOL;
echo $conta1->recuperaSaldo() . PHP_EOL;

$titular2 = new Titular(new Cpf('567.890-20'), 'Mariel');
$conta2 = new Conta($titular2);
var_dump($conta2);

echo $conta1::recuperaNumeroContas();
