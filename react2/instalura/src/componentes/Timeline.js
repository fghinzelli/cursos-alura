import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
    this.login = this.props.login;
  }

  carregaFotos() {
    let urlPerfil;

    if(this.login === undefined) {
      urlPerfil = `https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
    } else {
      urlPerfil = `https://instalura-api.herokuapp.com/api/fotos/${this.login}`;
    }

    fetch(urlPerfil)
    .then(response => response.json())
    .then(fotos => {
      this.setState({fotos: fotos});
    })
  }

  componentDidMount() {
    this.carregaFotos();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.login !== undefined) {
      this.login = nextProps.login;
      this.carregaFotos();
    }
  }

  render(){
      return (
      <div className="fotos container">
        {
          this.state.fotos.map(foto => <FotoItem foto={foto} key={foto.id}/>)
        } 
        
      </div>            
      );
  }
}