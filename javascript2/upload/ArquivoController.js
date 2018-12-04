class ArquivoController {

    constructor() {
        
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia(event) {
        event.preventDefault();
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        this._limpaFormulario();
        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
    }



    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}