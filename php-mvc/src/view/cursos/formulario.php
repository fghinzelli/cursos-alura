<?php $titulo = 'Novo curso'; require __DIR__ . '/../header.php'?>

    <form action="/salvar-curso" method="post">
      <div class="form-group">
        <input 
          type="text" 
          id="descricao" 
          name="descricao" 
          class="form-control" 
          value="<?= isset($curso) ? $curso->getDescricao() : '' ?>"
        />
      </div>
      <button class="btn btn-primary">
        Salvar
      </button>
    </form>
<?php require __DIR__ . '/../footer.php' ?>