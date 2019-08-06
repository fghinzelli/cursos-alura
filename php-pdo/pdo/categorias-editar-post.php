<?php 
    require_once 'global.php';

    $nome = $_POST['nome'];
    $id = $_POST['id'];

    try {
        $categoria = new Categoria($id);
        $categoria->nome = $nome;
        $categoria->atualizar();
    } catch(Exception $e) {
        Erro::trataErro($e);
    }

    header('Location: categorias.php');
?>