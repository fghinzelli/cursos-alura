function tocaSom(id) {
    const elemento = document.querySelector(id);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não existe ou não é válido')
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const classe = tecla.classList[1];
    const idAudio = `#som_${classe}`;

    tecla.onclick = function() {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function(evt) {
        let code = evt.code;
        console.log(code)
        if (code === 'Space' || code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}
