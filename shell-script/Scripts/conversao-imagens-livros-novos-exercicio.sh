#!/bin/bash

DIRETORIO_IMAGENS=~/projetos/cursos-alura/shell-script/imagens-novos-livros

converter_imagem(){
	imagem=$1
	imagem_sem_extensao=$(ls $imagem | awk -F. '{ print $1 }')
	convert $imagem_sem_extensao.jpg $imagem_sem_extensao.png
}

varrer_diretorio(){
	cd $1
	for arquivo in * 
	do
		caminho_arquivo=$(find $DIRETORIO_IMAGENS -name $arquivo)
		if [ -d $caminho_arquivo ]
		then
			varrer_diretorio $caminho_arquivo
		else
			converter_imagem $caminho_arquivo
		fi
	done
}

varrer_diretorio $DIRETORIO_IMAGENS

if [ $? -eq 0 ]
then
	echo "Conversao realizada com sucesso"
else
	echo "Erro na conversao"
fi
