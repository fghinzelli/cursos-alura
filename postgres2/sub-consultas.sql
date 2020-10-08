SELECT * FROM curso WHERE categoria_id IN (1,2);

SELECT curso.nome FROM curso WHERE categoria_id IN (
	SELECT id FROM categoria WHERE categoria.nome NOT LIKE '% %');

SELECT categoria, numero_cursos 
FROM (
	SELECT categoria.nome as categoria,
		COUNT(curso.*) as numero_cursos
	FROM categoria
		INNER JOIN curso ON curso.categoria_id = categoria.id
	GROUP BY categoria.nome) categorias
WHERE numero_cursos > 0;

