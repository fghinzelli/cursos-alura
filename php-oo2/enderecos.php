<?php

require_once('autoload.php');

use Alura\Banco\Modelo\Endereco;

$umEndereco = new Endereco('Rua A', 'Centro', '456', 'Antonio Prado');
$outroEndereco = new Endereco('Rua B', 'Centro', '265', 'Antonio Prado');

$umEndereco->bairro = 'Vila Toscana';
echo $umEndereco->bairro;
exit();

echo $umEndereco . PHP_EOL;
echo $outroEndereco;