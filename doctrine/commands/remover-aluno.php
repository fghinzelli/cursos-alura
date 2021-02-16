<?php

use Alura\Doctrine\Entity\Aluno;
use Alura\Doctrine\Helper\EntityManagerFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$entityManageFactory = new EntityManagerFactory();
$entityManager = $entityManageFactory->getEntityManager();

$id = $argv[1];

// Economiza uma query
// $aluno = $entityManager->getReference(Aluno::class, $id);
$aluno = $entityManager->find(Aluno::class, $id);

if (is_null($aluno)) {
  echo "\nAluno inexistente\n";
  exit();
}

$entityManager->remove($aluno);
$entityManager->flush();