import React, {Component} from 'react';
import Tabela from './Tabela';
import ContaClicks from './ContaClicks';


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

  render() {
    return (
      <div className="App">
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />  
        <ContaClicks />
      </div>
      
    );
  }
}

export default App;
