class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //this._listaNegociacoes = new ListaNegociacoes();
        let self = this;
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver) {
                if (['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    return function() {
                        console.log(`metodo ${prop} interceptado`);
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacaoView.update(target)
                    }
                }
                return Reflect.get(target, prop, receiver)
            }
        });
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
        this._clear();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
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