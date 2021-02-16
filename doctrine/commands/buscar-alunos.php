<?php

use Alura\Doctrine\Entity\Aluno;
use Alura\Doctrine\Helper\EntityManagerFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$entityManageFactory = new EntityManagerFactory();
$entityManager = $entityManageFactory->getEntityManager();

$alunoRepository = $entityManager->getRepository(Aluno::class);

/** @var Aluno[] @alunoList */
$alunoList = $alunoRepository->findAll();

// $alunoList = $alunoRepository->findBy([], ['nome' => 'DESC'], 2);

foreach($alunoList as $aluno) {
    echo "\nID: {$aluno->getId()}\nNome: {$aluno->getNome()}\n\n";
}

$nico = $alunoRepository->find(4);
echo "\n{$nico->getNome()}\n";

