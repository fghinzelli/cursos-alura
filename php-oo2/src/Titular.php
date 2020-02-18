<?php

class Titular extends Pessoa
{
    private $endereco;

    public function __construct(string $nome, CPF $cpf, Endereco $endereco)
    {
        parent::__construct($nome, $cpf);
        $this->endereco = $endereco;TI
    }

    public function getEndereco() 
    {
        return $this->endereco;
    }
}
