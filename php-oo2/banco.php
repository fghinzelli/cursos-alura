<?php

require_once 'autoload.php';

use Alura\Banco\Modelo\Pessoa;
use Alura\Banco\Modelo\Endereco;
use Alura\Banco\Modelo\CPF;
use Alura\Banco\Modelo\Conta\Titular;
use Alura\Banco\Modelo\Conta\Conta;

$endereco = new Endereco('Antonio Prado', 'Centro', 'Rua X', '102');
$vinicius = new Titular('Vinicius Dias', new CPF('123.456.789-10'), $endereco);
$primeiraConta = new Conta($vinicius);
$primeiraConta->deposita(500);
$primeiraConta->saca(300); // isso é ok

echo $primeiraConta->recuperaNomeTitular() . PHP_EOL;
echo $primeiraConta->recuperaCpfTitular() . PHP_EOL;
echo $primeiraConta->recuperaSaldo() . PHP_EOL;

$patricia = new Titular('Patricia', new CPF('698.549.548-10'), $endereco);
$segundaConta = new Conta($patricia);
var_dump($segundaConta);

$outroEndereco = new Endereco('a', 'b', 'c', '10d');
$outra = new Conta(new Titular('Fulano', new CPF('123.654.789-01'), $outroEndereco));
unset($segundaConta);
echo Conta::recuperaNumeroDeContas();
