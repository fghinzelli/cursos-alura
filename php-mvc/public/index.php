<?php

require __DIR__ . '/../vendor/autoload.php';

use Alura\Cursos\Controller\ListarCursos;
use Alura\Cursos\Controller\FormularioInsercao;
use Alura\Cursos\Controller\Persistencia;

$path = $_SERVER['REQUEST_URI'];
$rotas = require __DIR__ . '/../config/routes.php';

if (!array_key_exists($path, $rotas)) {
    http_response_code(404);
    exit();
}

$classeControladora = $rotas[$path];
$controlador = new $classeControladora();
$controlador->processaRequisicao();