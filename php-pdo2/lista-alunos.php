<?php

use Alura\Pdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$databasePath = __DIR__ . '/banco.sqlite';
$pdo = new PDO('sqlite:' . $databasePath);

$statement = $pdo->query('SELECT * FROM students');
var_dump($statement->fetchAll());
// var_dump($statement->fetchColumn(1));
// var_dump($statement->fetch());

$studentDataList = $statement->fetchAll(PDO::FETCH_ASSOC);
$studentList = [];

foreach($studentDataList as $student) {
  $studentList[] = 
    new Student(
      $student['id'], 
      $student['name'], 
      new DateTimeImmutable($student['birth_date'])
  );
}

var_dump($studentList);
