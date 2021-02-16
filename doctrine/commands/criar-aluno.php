<?php

use Alura\Doctrine\Entity\Aluno;
use Alura\Doctrine\Helper\EntityManagerFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$aluno = new Aluno();
$aluno->setNome($argv[1]);

$entityManageFactory = new EntityManagerFactory();
$entityManager = $entityManageFactory->getEntityManager();

$aluno->setNome('Fernando Ghinzelli');
$entityManager->persist($aluno);

$entityManager->flush();