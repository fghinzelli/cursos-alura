<?php
    $saldos = [
        2500,
        3000,
        4400,
        1000,
        8700,
        9000
    ];

    sort($saldos);
    foreach ($saldos as $saldo) {
        echo "<p>O saldo é $saldo</p>";
    }

    echo "O menor saldo é $saldos[0]";
?>