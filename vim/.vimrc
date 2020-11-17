execute pathogen#infect()
set nu       "mostra numeração de linhas
set showmode "mostra o modo em que estamos
set showcmd  "mostra no status os comandos inseridos
set ts=2     "tamanho das tabulações = set tabstop=2
filetype plugin indent on "Interpretacao do tipo de arquivo
syntax on    "habilita cores
set hls      "destaca com cores os termos procurados
set incsearch "habilita a busca incremental
set ai       "auto identação
set ignorecase "faz o vim ignorar maiúsculas e minúsculas nas buscas
set smartcase  "Se começar uma busca em maiúsculo ele habilita o case
set ic        "ignora maiúscula e minúsculas em uma busca
set scs       "ao fazer uma busca com maiúsculos considerar case sensitive
set cul        "abreviação de cursor line (destaca linha atual)
set ve=all     "permite mover o cursor para áreas onde não há texto
set ttyfast    "Envia mais caracteres ao terminal, melhorando o redraw de janelas. 
colorscheme Tomorrow-Night-Eighties
set shiftwidth=2 "Deixa coerente com o tab ao dar enter
set backspace=2
" set relativenumber "Calcular a distância entre linhas
" Alterar comando emmet
let g:user_emmet_leader_key=','

" Define a codificação para salvar
" set fileencoding=iso-8859-1

" Define a codificação para a abertura de arquivos
" set encoding=iso-8859-1

" Usar espaços no lugar de tabs
set expandtab

" Backspace deve respeitar a identação
set softtabstop=2

