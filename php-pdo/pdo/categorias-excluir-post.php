<?php
    require_once 'global.php';

    $id = $_GET['id'];

    try {
        $categoria = new Categoria($id);
        $categoria->excluir();
    } catch(Exception $e) {
        Erro::trataErro($e);
    }

    header('Location: categorias.php');
?>
