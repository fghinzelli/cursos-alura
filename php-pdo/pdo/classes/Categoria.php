<?php
    require_once 'Conexao.php';

    class Categoria {

        public $id;
        public $nome;

        public function listar() {
            $query = "SELECT * FROM categorias";
            $connection = Conexao::pegarConexao();;
            $resultado = $connection->query($query);
            $lista = $resultado->fetchAll();
            return $lista;
        }

        public function inserir() {
            $query = 'INSERT INTO categorias(nome) VALUES ("' . $this->nome .'")';
            $connection = Conexao::pegarConexao();
            $connection->exec($query);
        }
    }
?>