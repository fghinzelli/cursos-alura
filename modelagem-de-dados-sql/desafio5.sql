SELECT F.PRIMEIRO_NOME, F.NOME_MEIO, F.ULTIMO_NOME
FROM TB_FUNCIONARIO F
WHERE F.CPF NOT IN (SELECT DISTINCT CPF_FUNCIONARIO FROM TB_DEPENDENTE);

SELECT F.PRIMEIRO_NOME, F.NOME_MEIO, F.ULTIMO_NOME
FROM TB_FUNCIONARIO F
LEFT JOIN TB_DEPENDENTE D ON D.CPF_FUNCIONARIO = F.CPF
WHERE D.CPF_FUNCIONARIO IS NULL;
