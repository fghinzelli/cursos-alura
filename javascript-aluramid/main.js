function tocaSom(id) {
    document.querySelector(id).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const classe = tecla.classList[1];
    const idAudio = `#som_${classe}`;

    tecla.onclick = function() {
        tocaSom(idAudio)
    };
}
