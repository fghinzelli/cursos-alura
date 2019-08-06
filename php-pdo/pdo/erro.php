<?php require_once 'cabecalho.php' ?>

<div class="row">
    <div class="col-md-12">
        <div class="alert-danger">
            <h3>Erro</h3>
            <p><?php echo $e->getMessage(); ?>
        </div>
    </div>
</div>
<?php require_once 'rodape.php' ?>