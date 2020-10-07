SELECT aluno.primeiro_nome, aluno.ultimo_nome, COUNT(aluno_curso.curso_id) as numero_cursos
FROM aluno
INNER JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
GROUP BY 1,2
ORDER BY numero_cursos DESC
LIMIT 1;


SELECT curso.nome, COUNT(aluno_curso.aluno_id) numero_alunos
FROM curso
INNER JOIN aluno_curso ON aluno_curso.curso_id = curso.id
GROUP BY curso.nome 
ORDER BY numero_alunos