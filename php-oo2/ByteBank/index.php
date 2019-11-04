<?php 
    
    ini_set("display_errors", 1);

    require_once "autoload.php";
    
    use classes\funcionarios\Diretor;
    use classes\funcionarios\Designer;
    use classes\sistemaInterno\GerenciadorBonificacao;
    
    $diretor = new Diretor('12345678998', 12345);
    $diretor->senha = "12345";
    $designer = new Designer('12345678998', 12345);
    
    $sistema = new GerenciadorBonificacao();
    $sistema->registrar($designer);
    var_dump($sistema->getTotalBonificacoes());
    $sistema->registrar($diretor);
    var_dump($sistema->getTotalBonificacoes());

?>