<?php

class Conta 
{
 	private $titular;
	private $saldo;
	private static $numeroDeContas = 0;

	public function __construct(Titular $titular) {
		$this->titular = $titular;
		$this->saldo = 0;
		self::$numeroDeContas++;
	}

	public function __destruct() {
		if (self::$numeroDeContas > 2)  {
			echo "Há mais de uma conta ativa";
		}
	}

	private function validaNomeTitular(string $nomeTitular) {
		if (strlen($nomeTitular) < 5) {
			echo "Nome precisa ter 5 caractares";
			exit();
		}
	}
	public function sacar(float $valorASacar): bool
	{           
		if ($valorASacar > $this->saldo) {
			echo "Saldo indisponivel";
			return false;
		}

		$this->saldo -= $valorASacar;
		return true;
	}


	public function depositar(float $valorADepositar): void
	{
		if ($valorADepositar < 0) {
			echo "Valor dever ser positivo";
		} 
		
		$this->saldo += $valorADepositar;
	}

	public function transferir(Conta $conta, float $valorATransferir): void
	{
		if ($this->sacar($valorATransferir)) {
			$conta->depositar($valorATransferir);	
		};
	}

	public static function recuperaNumeroContas(): int 
	{
		return self::$numeroDeContas;
	}

	public function recuperaSaldo() {
  	return $this->saldo;
	}

	public function recuperaNomeTitular() {
   	return $this->titular->getNome();
	}

	public function recuperaCpfTitular() {
   	return $this->titular->getCpf();
	}
}

