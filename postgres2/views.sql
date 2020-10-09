CREATE VIEW vw_aluno_qtd_cursos as (
	SELECT 
		aluno.primeiro_nome || ' ' || aluno.ultimo_nome AS nome_aluno
		, COUNT(aluno_curso.curso_id) as qtd_cursos
	FROM 
		aluno
		INNER JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
	GROUP BY 1
)

SELECT * FROM vw_aluno_qtd_cursos WHERE qtd_cursos < 10;