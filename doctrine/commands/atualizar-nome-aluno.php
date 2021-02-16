<?php

use Alura\Doctrine\Entity\Aluno;
use Alura\Doctrine\Helper\EntityManagerFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$entityManageFactory = new EntityManagerFactory();
$entityManager = $entityManageFactory->getEntityManager();
// $alunoRepository = $entityManager->getRepository(Aluno::class);

$id = $argv[1];
$novoNome = $argv[2];

// $aluno = $alunoRepository->find($id);
$aluno = $entityManager->find(Aluno::class, $id);
$aluno->setNome($novoNome);

$entityManager->flush();