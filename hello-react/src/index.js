import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
import {Router,Route,Link,browserHistory} from 'react-router'
ReactDOM.render(
    <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/header" component={Header}/>
            <Route path="/content" component={Content}/>
            <Route path="/footer" component={Footer}/>
    </Router>, document.getElementById('root')
);
