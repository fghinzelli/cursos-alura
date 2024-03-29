<?php $titulo = 'Lista de Cursos';
require __DIR__ . '/../header.php'; ?>
<a href="formulario-novo-curso.php" class="btn btn-primary mb-2">Novo curso</a>
<ul class="list-group">
  <?php foreach ($cursos as $curso) : ?>
    <li class="list-group-item d-flex justify-content-between">
      <?= $curso->getDescricao(); ?>
      <span>
        <a href="/alterar-curso?id=<?php echo $curso->getId(); ?>" class="btn btn-info btn-sm">Alterar</a>
        <a href="/excluir-curso?id=<?php echo $curso->getId(); ?>" class="btn btn-danger btn-sm">
          Excluir
        </a>
      </span>
    </li>
  <?php endforeach; ?>
</ul>
<?php require __DIR__ . '/../footer.php' ?>