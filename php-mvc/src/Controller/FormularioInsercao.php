<?php

namespace Alura\Cursos\Controller;

use Alura\Cursos\Controller\ControllerComHtml;

class FormularioInsercao extends ControllerComHtml implements InterfaceControladorRequisicao
{
  public function processaRequisicao() : void
  {
    echo $this->renderizaHtml('/cursos/formulario.php', ['titulo' => 'Novo curso']);
  }
}
