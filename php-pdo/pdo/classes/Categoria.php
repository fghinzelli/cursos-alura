<?php

    class Categoria {

        public $id;
        public $nome;

        public function __construct($id = false) {
            if($id) {
                $this->id = $id;
                $this->carregar();
            }
        }

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

        public function atualizar() {
            $query = 'UPDATE categorias SET nome = "' . $this->nome . '" WHERE id = ' . $this->id;
            $connection = Conexao::pegarConexao();
            $connection->exec($query);
        }

        public function carregar() {
            $query = "SELECT id, nome FROM categorias WHERE id = " . $this->id;
            $connection = Conexao::pegarConexao();
            $resultado = $connection->query($query);
            $lista = $resultado->fetchAll();
            foreach($lista as $linha) {
                $this->nome = $linha['nome'];
            }
        }

        public function excluir() {
            $query = "DELETE FROM categorias WHERE id = " . $this->id;
            $connection = Conexao::pegarConexao();
            $connection->exec($query);
        }
    }
?>