<?php

use Alura\Pdo\Infrastructure\Repository\PdoStudentRepository;
use DateTime;
use Alura\Pdo\Domain\Model\Student;
use Alura\Pdo\Infrastructure\Persistence\ConnectionCreator;

require_once 'vendor/autoload.php';

$connection = ConnectionCreator::createConnection();
$studentRepository = new PdoStudentRepository($connection);

$newStudent = new Student($id = 1, $name = 'Fernando Ghinzelliiii', $birthDate = new DateTime('1986-06-11'));
$studentRepository->save($newStudent);
var_dump($studentRepository->allStudents()); 