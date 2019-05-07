import React, {Component} from 'react';
import Timeline from './componentes/Timeline';
import Header from './componentes/Header';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
          <Timeline login={this.props.params.login}/>
        </div>
      </div>
    )
  }
}

export default App;
