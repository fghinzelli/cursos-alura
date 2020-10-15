<?php

function funcao1()
{
    echo 'Entrei na função 1' . PHP_EOL;
   
    try {
        funcao2();    
    } catch (RuntimeException | DivisionByZeroError $error) {
        echo $error->getMessage() . PHP_EOL;
        echo $error->getLine() . PHP_EOL;
        echo $error->getTraceAsString() . PHP_EOL;
    } 
    
    
    echo 'Saindo da função 1' . PHP_EOL;
}
/**
 * @throws RuntimeException
 */
function funcao2()
{
    echo 'Entrei na função 2' . PHP_EOL;
    
    $exception = new RuntimeException('Minha excel');
    throw $exception;
    
    for ($i = 1; $i <= 5; $i++) {
        echo $i . PHP_EOL;
    }
    echo 'Saindo da função 2' . PHP_EOL;
}

echo 'Iniciando o programa principal' . PHP_EOL;
funcao1();
echo 'Finalizando o programa principal' . PHP_EOL;