<?php

    namespace classes\abstratas;
    
    abstract class Funcionario {
        public $nome;
        public $cpf;
        protected $salario;
        
        public function __construct($cpf, $salario) {
            $this->cpf = $cpf;
            $this->salario = $salario;
        }
        
        public function aumentarSalario() {
            $this->salario *= 1.5;
        }
        
        abstract public function getBonificacao();
    }
?>