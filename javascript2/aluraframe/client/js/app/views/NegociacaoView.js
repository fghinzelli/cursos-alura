class NegociacaoView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(modelo) {
        this._elemento.innerHTML = this._template(modelo)
    }

    _template(modelo) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                ${
                    modelo.listaNegociacoes.map(negociacao => 
                        `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>`)
                }
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `
    }
}