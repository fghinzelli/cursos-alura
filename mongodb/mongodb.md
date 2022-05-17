docker run -v "${PWD}/mongodb":/data/db --name mongodb -d mongo

## Criar uma coleção
 db.createCollection('alunos')

## Inserir item
db.alunos.insert({
"nome": "Felipe",
"data_nascimento": new Date(1994,02,26),
"notas": [10, 9, 4.5],
"curso": { 
	"nome": "Sistemas de informação",
},
"habilidades": 
[{
	"nome": "Inglês",
	"nivel": "avançado"
}]
})

## Listando dados
db.alunos.find().pretty()

## Removendo dados
db.alunos.remove({
	"_id": ObjectId("6279cae75a9d7ab4129b08e6")
})

## Filtrando dados
db.alunos.find({nome: 'Felipe'}).pretty()

db.alunos.find({"habilidades.nome": "inglês"})

# Operador OR e AND
db.alunos.find({$or: [
    "curso.nome": "Sistemas de informação"
    ],
    "nome": "Felipe"
})

# Operador IN
db.alunos.find({
    "curso.nome": { $in: ["Sistemas de informação", "Engenharia química"]}
})

