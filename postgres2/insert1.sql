INSERT INTO aluno (primeiro_nome, ultimo_nome, data_nascimento)
VALUES 
('Antônio', 'Stark', '1980-01-10'),
('Peter', 'Parker', '1990-05-20'),
('Clark', 'Kent', '1970-08-15'),
('Bruce', 'Wayne', '1971-07-11');

INSERT INTO categoria (nome)
VALUES 
('Programação'), ('Frontend'), ('Design'), ('Datascience');

INSERT INTO curso (nome, categoria_id)
VALUES 
('Java', 1), ('PHP', 1), ('Python', 1),
('React', 2), ('Angular', 2), ('CSS', 2),
('Photoshop', 3), ('Desenho', 3), ('Teoria das Cores', 3),
('Excel', 4), ('Pandas', 4), ('Big Data', 4);

INSERT INTO aluno_curso (aluno_id, curso_id)
VALUES 
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),
(2,7),(1,8),(1,9),(3,4),(3,5),(3,6),
(3,1),(3,8),(4,9),(4,10),(4,11),(4,12),
(4,1),(4,2),(4,3);
