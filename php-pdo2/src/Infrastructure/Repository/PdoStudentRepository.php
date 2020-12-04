<?php

namespace Alura\Pdo\Infrastructure\StudentRepository;

use Alura\Pdo\Domain\Model\Student;
use Alura\Pdo\Domain\Repository\StudentRepository;
use Alura\Pdo\Infrastructure\Persistence\ConnectionCreator;
use DateTimeImmutable;
use DateTimeInterface;
use PDO;

class PdoStudentRepository implements StudentRepository
{
  private \PDO $connection;

  public function __construct()
  {
    $this->connection = ConnectionCreator::createConnection();
  }

  public function allStudents(): array
  {
    $statement = $$this->connection->query('SELECT * FROM students');

    $studentDataList = $statement->fetchAll(PDO::FETCH_ASSOC);
    $studentList = [];

    foreach ($studentDataList as $student) {
      $studentList[] =
        new Student(
          $student['id'],
          $student['name'],
          new DateTimeImmutable($student['birth_date'])
        );
    }
    var_dump($studentList);
    
    return $studentList;
  }

  public function studentsBirthAt(DateTimeInterface $birthDate): array
  {
    return [];
  }
  public function save(Student $student): bool
  {
    if ($student->id() === null) {
      return $this->insert($student);
    }

    return $this->update($student);
  }

  private function insert(Student $student): bool
  {
    $insertQuery = "INSERT INTO students (name, birth_date) VALUES (:name, :birth_date);";
    $stmt = $this->connection->prepare($insertQuery);

    $success = $stmt->execute([
      ':name' => $student->name(),
      ':birth_date' => $student->birthDate->format('Y-m-d')
    ]);

    $student->defineId($this->connection->lastInsertId());
    return $success;
  }

  private function update(Student $student): bool
  {

  }

  public function remove(Student $student): bool
  {
    $stmt = $this->connection->prepare("DELETE FROM students WHERE id = ?;");
    $stmt->bindValue(1, $student->id(), PDO::PARAM_INT);
    
    return $stmt->execute();
  }
}
