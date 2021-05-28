<?php
  switch ($_SERVER['REQUEST_URI']) {  
    case '/listar-cursos':
      require 'listar-cursos.php';
      break;
    case '/novo-curso':
      require 'formulario-novo-curso.php';
      break;
    default:
      echo "Erro 404";
      break;
  }
