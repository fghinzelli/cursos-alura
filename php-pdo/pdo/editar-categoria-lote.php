<?php
    require_once 'classes/Categoria.php';

    $cat = new Categoria();
    $lista = $cat->listar();
    foreach ($lista as $item) {
        $categoria = new Categoria($item['id']);
        $categoria->nome = 'Categoria ' . $categoria->nome;
        $categoria->atualizar();
    }
    echo '<pre>';
    print_r($categoria->listar());
    echo '</pre>';


?>