import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AutorBox from './componentes/Autor';
import Home from './Home';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/autor" component={AutorBox}/>
            <Route path="/livro" />
        </Route>
    </Router>),
    document.getElementById('root')
);
