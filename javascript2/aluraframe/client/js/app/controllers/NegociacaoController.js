class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView = new NegociacaoView($('#negociacaoView'));
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);    
    }

    adiciona(event) {
        event.preventDefault();
        let negociacao = this._adicionaNegociacao()
        this._listaNegociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem('Negociação adicionada com sucesso');
        this._mensagemView.update(this._mensagem);
        this._clear();
    }

    _adicionaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _clear() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }


}