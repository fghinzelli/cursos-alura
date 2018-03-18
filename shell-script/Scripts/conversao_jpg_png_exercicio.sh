#!/bin/bash

converter_imagem(){
	cd ~/projetos/cursos-alura/shell-script/imagens-livro

	if [ ! -d png ]
	then
		mkdir png
	fi

	for imagem in *.jpg
	do
		imagem_sem_extensao=$(ls $imagem | awk -F. '{ print $1}')
		convert $imagem_sem_extensao.jpg png/$imagem_sem_extensao.png
	done
}

converter_imagem 

if [ $? -eq 0 ]
then
	echo "Conversão realizada com sucesso"
else
	echo "Erro na conversão dos arquivos"
fi
