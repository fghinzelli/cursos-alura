<?php

namespace Alura\Pdo\Infrastructure\StudentRepository;

use Alura\Pdo\Domain\Repository\StudentRepository;

class PdoStudentRepository implements StudentRepository
{
  public function allStudents(): array
  {

  }

  public function studentsBirthAt(DateTimeInterface $birthDate): array 
  {

  }
  public function save(Student $student): bool
  {

  }
  public function remove(Student $student): bool
  {
    
  }
}
