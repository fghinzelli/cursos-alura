<?php
    $select = 'SELECT * FROM categorias';
    $conexao = new PDO('mysql:host=127.0.0.1;dbname=estoque', 'admin', 'admin');
    $resultado = $conexao->query($select);
    $lista = $resultado->fetchAll();
    echo '<pre>';
    print_r($lista);
    echo '</pre>';
?>