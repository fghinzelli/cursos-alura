<?php
require_once 'autoload.php';

use Alura\Banco\Service\Autenticador;
use Alura\Banco\Modelo\Funcionario\{Diretor, Gerente};
use Alura\Banco\Modelo\{CPF, Endereco};
use Alura\Banco\Modelo\Conta\Titular;


$autenticador = new Autenticador();
$diretor = new Diretor(
    'Fernando',
    new CPF('123.456.789-10'),
    3000
);
$titular = new Titular(
    'Cliente x', 
    new CPF('123.456.789-11'),
    new Endereco('Antonio Prado', 'Centro', 'Rua X', '102')
);

$autenticador->tentaLogin($titular, 'abcde');