import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import InputSubmit from './componentes/InputSubmit';
import TratadorErros from './TratadorErros';
import PubSub from 'pubsub-js';

export class FormularioLivro extends Component {

    constructor(props) {
        super(props);
        this.state = {titulo: '', preco: '', autorId: ''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setTitulo = this.setTitulo.bind(this);
        this.setPreco = this.setPreco.bind(this);
        this.setAutorId = this.setAutorId.bind(this);
    }

    enviaForm(evento) {
        evento.preventDefault();

        var titulo = this.state.titulo.trim();
        var preco = this.state.preco.trim();
        var autorId = this.state.autorId;

        $.ajax({
            url: 'https://cdc-react.herokuapp.com/api/livros',
            contentType: 'application/json',
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify({titulo: titulo, preco: preco, autorId: autorId}),
            success: function(resposta) {
                PubSub.publish('atualiza-lista-livros', resposta);
                this.setState({titulo: '', preco: '', autorId: ''});
            },
            error: function(resposta) {
                if(resposta.status === 400) {
                    new TratadorErros().publicaErros(resposta.responseJSON);
                }
            },
            beforeSend: function() {
                PubSub.publish('limpra-erros', {});
            }
        });

        this.setState({titulo: '', preco: '', autorId: ''});
    }

    setTitulo(evento) {
        this.setState({titulo: evento.target.value})
    }

    setPreco(evento) {
        this.setState({preco: evento.target.value})
    }

    setAutorId(evento) {
        this.setState({autorId: evento.target.value})
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method='post'>
                    <InputCustomizado id="titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.setTitulo} label="Título" />
                    <InputCustomizado id="preco" type="text" name="preco" value={this.state.preco} onChange={this.setPreco} label="Email" />
                    <div className="pure-control-group">
                        <label hmlFor="autorId">Autor</label>
                        <select name="autorId" id="autorId" onChange={this.setAutorId}>
                            <option value="">Selecione</option>
                            {
                                this.props.autores.map(function(autor) {
                                    return <option value={autor.id}>{autor.nome}</option>;
                                })
                            }
                            
                        </select>
                    </div>
                    <InputSubmit label="Gravar"></InputSubmit>
                </form>             
            </div>
        );
    }
}

export class TabelaLivros extends Component {

    render() {
        return (
            <div>            
                <table className="pure-table">
                    <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Preço</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.lista.map(function(livro) {
                            return (
                                <tr key={livro.titulo}>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor.nome}</td>
                                    <td>{livro.preco}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table> 
            </div> 
        );
    }
}

export default class LivroBox extends Component {

    constructor(props) {

        super(props);
        this.state = {lista: [], autores: []};

    }
    componentDidMount() {
        $.ajax({
            url: 'https://cdc-react.herokuapp.com/api/livros',
            dataType: 'json',
            success: function(resposta) {
                this.setState({lista: resposta})
            }.bind(this)
        });
        
        $.ajax({
            url: "https://cdc-react.herokuapp.com/api/autores",
            dataType: 'json',
            success: function(resposta) {
                this.setState({autores: resposta})
            }.bind(this)
        })
        
        PubSub.subscribe('atualiza-lista-livros', function(topico, novaListagem) {
            this.setState({lista: novaListagem})
        }.bind(this));
    }


    render() {
        return(
            <div>
            <div className='header'>
                <h1>Cadastro de Livros</h1>
            </div>
            <div className='content' id='content'>
                <FormularioLivro autores={this.state.autores} />
                <TabelaLivros lista={this.state.lista} />
            </div>
        </div>
        );
    }

        
    
}