<?php
    class Conexao {
        public static function pegarConexao() {
            return new PDO('mysql:host=localhost;dbname=estoque', 'admin', 'admin');
        }
    }
?>