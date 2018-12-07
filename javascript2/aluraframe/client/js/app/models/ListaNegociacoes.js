class ListaNegociacoes {

    constructor (armadilha) {
        this._listaNegociacoes = [];
        this._armadilha = armadilha;
    }

    get listaNegociacoes() {
        return [].concat(this._listaNegociacoes);
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    esvazia() {
        this._listaNegociacoes = [];
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this])
    }
}