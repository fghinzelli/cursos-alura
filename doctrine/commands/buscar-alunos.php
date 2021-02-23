<?php

use Alura\Doctrine\Entity\Aluno;
use Alura\Doctrine\Entity\Telefone;
use Alura\Doctrine\Helper\EntityManagerFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$entityManageFactory = new EntityManagerFactory();
$entityManager = $entityManageFactory->getEntityManager();

// $alunoRepository = $entityManager->getRepository(Aluno::class);
$dql = "SELECT aluno FROM Alura\\Doctrine\\Entity\\Aluno aluno WHERE aluno.id = 1 OR aluno.nome = 'Bernardo Carissimi Ghinzelli' ORDER BY aluno.nome";
$query = $entityManager->createQuery($dql);

$alunoList = $query->getResult();

/** @var Aluno[] @alunoList */
// $alunoList = $alunoRepository->findAll();

// $alunoList = $alunoRepository->findBy([], ['nome' => 'DESC'], 2);

foreach($alunoList as $aluno) {
    $telefones = $aluno
        ->getTelefones()
        ->map(function (Telefone $telefone) {
            return $telefone->getNumero();
    })
    ->toArray();

    echo "\nID: {$aluno->getId()}\nNome: {$aluno->getNome()}\n\n";
    echo "Telefones: " . implode(', ', $telefones) . "\n";
}

// $nico = $alunoRepository->find(4);
// echo "\n{$nico->getNome()}\n";

