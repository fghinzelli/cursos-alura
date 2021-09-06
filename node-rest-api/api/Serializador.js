class Serializador {
  json (dados) {
    return JSON.stringify(dados)
  }

  serializar(dados) {
    if (this.contentType === 'application/json') {
      return json
    }

    return new ValorNaoSuportado(this.contentType)
  }


}