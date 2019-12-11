<?php
    require('Calculadora.php');
    $notas = [9, 3, 10, 5];

    $calculadora = new Calculadora();
    $media = $calculadora->calculaMedia([]);

    if ($media ) {
        echo "A média é " . $media;
    } else {
        echo "Não foi possível calcular a média";
    }
?>