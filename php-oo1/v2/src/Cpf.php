<?php

class Cpf
{
	private $cpf;

	public function __construct(string $cpf) {
		$numero = filter_var($cpf, FILTER_VALIDATE_REGEXP, [
			'options' => [
				'regexp' => '/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/'
			]
		]);

    if ($numero === false) {
			echo 'Cpf inválido';
			exit();
		}

		$this->cpf = $cpf;
	}

	public function getCpf()
	{
  	return $this->cpf;
	}
}
