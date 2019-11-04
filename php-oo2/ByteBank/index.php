<?php 
    
    ini_set("display_errors", 1);

    require_once "autoload.php";
    
    use classes\funcionarios\Diretor;
    use classes\funcionarios\Designer;
    use classes\sistemaInterno\GerenciadorBonificacao;
    
    $diretor = new Diretor('12345678998', 12345);
    $diretor->senha = "12345";
    $designer = new Designer('12345678998', 12345);
    
    $gerenciador = new GerenciadorBonificacao();
    $gerenciador->AutentiqueAqui($diretor, "12345");
    
    $gerenciador->registrar($designer);
    var_dump($gerenciador->getTotalBonificacoes());
    $gerenciador->registrar($diretor);
    var_dump($gerenciador->getTotalBonificacoes());

?>