<?php
	require "ContaCorrente.php";

	$contaJoao = new ContaCorrente("João da Silva", "Centro", "12345", 2000.00);
	$contaMaria = new ContaCorrente("Maria da Silva", "Bairro Igara", "54687", 20.00);

	
	$contaJoao->sacar("55");
	echo $contaJoao->saldo;
?>
