<?php

require_once 'StudentRepository.php';

$databasePath = __DIR__ . '/banco.sqlite';
$pdo = new \PDO('sqlite:' . $databasePath);


$student = new StudentRepository($pdo);
var_dump($student->allStudents());

