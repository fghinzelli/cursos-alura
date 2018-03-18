#!/bin/bash

DIRETORIO_IMAGENS=~/projetos/cursos-alura/shell-script/imagens-novos-livros

converter_arquivo(){
	local caminho_imagem=$1
	local arquivo_sem_extensao=$(ls $caminho_imagem | awk -F. '{ print $1 }')
	convert $arquivo_sem_extensao.jpg $arquivo_sem_extensao.png
}

varrer_diretorio(){
	cd $1
	for arquivo in *
	do
		local caminho_completo=$(find $DIRETORIO_IMAGENS -name $arquivo)
		if [ -d $caminho_completo ]
		then
			varrer_diretorio $caminho_completo
		else
			converter_arquivo $caminho_completo
		fi
	done
}

varrer_diretorio $DIRETORIO_IMAGENS 
if [ $? -eq 0 ] 
then
	echo "Conversão realizada com sucesso"
else
	echo "Ocorreu um erro na conversão"
fi
