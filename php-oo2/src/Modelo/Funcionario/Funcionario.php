<?php

namespace Alura\Banco\Modelo\Funcionario;

use Alura\Banco\Modelo\{CPF, Pessoa};

abstract class Funcionario extends Pessoa 
{
    private $salario;

    public function __construct($nome, $cpf, $salario)
    {
        parent::__construct($nome, $cpf);
        $this->salario = $salario;
    }

    public function getCargo()
    {
        return $this->cargo;
    }

    public function getSalario(): float
    {
        return $this->salario;
    }

    abstract public function calculaBonificacao(): float;
    
}