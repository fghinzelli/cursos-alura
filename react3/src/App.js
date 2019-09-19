import React, {Component} from 'react';
import Tabela from './Tabela';
import Formulario from './Formulario';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '100'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '85'
      },
      {
        nome: 'Nico',
        livro: 'Nodejs',
        preco: '70'
      },
      {
        nome: 'Fernando',
        livro: 'Python',
        preco: '30'
      }
    ],
  }

  removeAutor = (index) => {
    const {autores} = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    })

  }

  escutadorDeSubmit = autor => {
    this.setState({autores: [...this.state.autores, autor]})
  }

  render() {
    return (
      <div className="container mb-10">
        <Header />
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />  
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        <Footer />
      </div>
      
    );
  }
}

export default App;
