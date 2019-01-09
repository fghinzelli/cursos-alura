class ListaNegociacoes {

    constructor () {
        this._listaNegociacoes = [];
    }

    get listaNegociacoes() {
        return [].concat(this._listaNegociacoes);
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
    }

    esvazia() {
        this._listaNegociacoes = [];
    }

    get volumeTotal() {
        return this.listaNegociacoes.reduce((total, n) => total += n.volume, 0.0)
    }

    ordena(criterio) {
        this._listaNegociacoes.sort(criterio)
    }

    inverteOrdem() {
        this._listaNegociacoes.reverse();
    }
}