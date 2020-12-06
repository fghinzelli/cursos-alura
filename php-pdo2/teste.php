<?php

use Alura\Pdo\Infrastructure\Repository\PdoStudentRepository;
use DateTime;
use Alura\Pdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$studentRepository = new PdoStudentRepository();

$newStudent = new Student($id = 1, $name = 'Fernando Ghinzelliiii', $birthDate = new DateTime('1986-06-11'));
$studentRepository->save($newStudent);
var_dump($studentRepository->allStudents()); 