<?php
    $nomes = 'Fernando, Mariel, Beatriz';

    $nomes = explode(', ', $nomes);
    foreach ($nomes as $nome) {
        echo "<p>$nome</p>";
    }

    $nomes_juntos = implode(', ', $nomes);
    echo $nomes_juntos;
?>