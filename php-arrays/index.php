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

echo "<pre>";
var_dump($lista);
ArrayUtils::remover('12', $lista);

var_dump($lista);
echo "</pre>";
?>