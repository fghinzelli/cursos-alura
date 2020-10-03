<?php

namespace Alura\Banco\Modelo\Conta;

class SaldoInsuficienteException extends \DomainException
{ 
  public function __construct(float $valorSaque, float $saldoAtual) 
  {
    $mensagem = "Você tentou sacar $valorSaque, mas tem apenas $saldoAtual na conta";
    parent::__construct($mensagem, $code, $previous);
  }
}