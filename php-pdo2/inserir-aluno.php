<?php

use Alura\Pdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$databasePath = __DIR__ . '/banco.sqlite';
$pdo = new PDO('sqlite:' . $databasePath);

$student = new Student(
  null, 
  'Bernardo Carissimi Ghinzelli',  
  new \DateTimeImmutable('2021-01-14'));

// $sqlInsert = "INSERT INTO students (name, birth_date) VALUES (?, ?);";
$sqlInsert = "INSERT INTO students (name, birth_date) VALUES (:name, :birth_date);";
$statement = $pdo->prepare($sqlInsert);
$statement->bindValue(':name', $student->name());
$statement->bindValue(':birth_date', $student->birthDate()->format('Y-m-d'));
// statement->bindParam(2, $student->name()); // Parameter send by referency
$statement->execute();
if ($statement->execute()) {
  echo "Aluno incluído";
}
