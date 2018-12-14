class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(),
            ['adiciona', 'esvazia'], model =>
            this._negociacaoView.update(model));
        this._negociacaoView = new NegociacaoView($('#negociacaoView'));
        this._negociacaoView.update(this._listaNegociacoes);    

        this._mensagem = ProxyFactory.create(
            new Mensagem(), ['texto'], model =>
                this._mensagemView.update(model));
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);    
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._adicionaNegociacao());
        this._mensagem = new Mensagem('Negociação adicionada com sucesso');
        this._clear();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
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