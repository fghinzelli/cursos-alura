<?php

use Alura\Pdo\Domain\Model\Student;
use Alura\Pdo\Infrastructure\Persistence\ConnectionCreator;
use Alura\Pdo\Infrastructure\Repository\PdoStudentRepository;

require_once 'vendor/autoload.php';

$connection = ConnectionCreator::createConnection();
$studentRepository = new PdoStudentRepository($connection);

$connection->beginTransaction();
try {
  $studentRepository->save(new Student(
    null,
    'José Luis Ghinzelli',
    new DateTimeImmutable('1956-04-21')
  ));

  $studentRepository->save(new Student(
    null,
    'Lourdes Ghinzelli',
    new DateTimeImmutable('1957-09-08')
  ));
  $connection->commit();
} catch (\PDOException $e) {
  echo $e->getMessage();
  $connection->rollBack();
}
