<?php
declare(strict_types=1);

namespace Alura;
require "autoload.php";

$lista = [
    "Giovanni",
    12,
    "Maria",
    25,
    "Luis",
    "Luísa",
    "12"
];

$correntistas = [
    'Giovanni',
    'João',
    'Maria',
    'Luis',
    'Luisa',
    'Rafael',
];

$saldos = [
    2500,
    3000,
    4400,
    1000,
    8700,
    9000,
];

echo "<pre>";
$maiores = [];
$relacionados = array_combine($correntistas, $saldos);
foreach($relacionados as $chave => $valor){
    if ($valor > 3000) {
        $maiores[] = $chave;
    }
}

echo var_dump($maiores);
echo "</pre>";
?>