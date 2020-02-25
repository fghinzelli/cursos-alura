<?php

require_once 'autoload.php';

use Alura\Banco\Modelo\CPF;
use Alura\Banco\Modelo\Funcionario\{Funcionario, Gerente, Diretor, Desenvolvedor};
use Alura\Banco\Service\ControladorDeBonificacoes;

$umFuncionario = new Gerente(
    'Fernando',
    new CPF('123.456.789-88'),
    'Gerente',
    1000
);

$diretor = new Diretor(
    'Jacob',
    new CPF('123.456.789-88'),
    3000
);

$desenvolvedor = new Desenvolvedor(
    'Jacob',
    new CPF('123.456.789-88'),
    1000
);

$controlador = new ControladorDeBonificacoes();
$controlador->adicionaBonificacaoDe($diretor);
$controlador->adicionaBonificacaoDe($umFuncionario);
$controlador->adicionaBonificacaoDe($desenvolvedor);

echo $controlador->getTotal();