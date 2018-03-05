#!/bin/bash
CAMINHO_IMAGENS=~/projetos/cursos-alura/shell-script/imagens-livros

for imagem in $@
do
    convert $CAMINHO_IMAGENS/$imagem.jpg $CAMINHO_IMAGENS/$imagem.png
done

