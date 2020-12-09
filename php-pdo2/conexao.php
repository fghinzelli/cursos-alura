<?

$databasePath = __DIR__ . '/banco.sqlite';
$pdo = new PDO('sqlite:' . $databasePath);

// $pdo->exec("INSERT INTO phones (area_code, number, student_id) VALUES ('24', '8888-7777', 1), ('24', '6666-5555', 1)");
// exit();

$createTableSql = '
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    birth_date TEXT
  );

  CREATE TABLE IF NOT EXISTS phones (
    id INTEGER PRIMARY KEY,
    area_code TEXT,
    number TEXT,
    student_id INTEGER,
    FOREIGN_KEY(student_id) REFERENCES students(id)
  );
';
try {
  var_dump($pdo->exec($createTableSql);
} catch (\PDOException $e) {
  echo($e);
}
