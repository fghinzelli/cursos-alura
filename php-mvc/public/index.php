<?php

require __DIR__ . '/../vendor/autoload.php';

use Alura\Cursos\Controller\ListarCursos;
use Alura\Cursos\Controller\FormularioInsercao;

switch ($_SERVER['REQUEST_URI']) {  
    case '/listar-cursos':
      $controlador = new ListarCursos();
      $controlador->processaRequisicao();
      break;
    case '/novo-curso':
      $controlador = new FormularioInsercao();
      $controlador->processaRequisicao();
      break;
    default:
      echo "Erro 404";
      break;
  }
