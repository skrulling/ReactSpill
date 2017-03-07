import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SpillEn from './components/SpillEn'
import './index.css';
import { Router, Route, hashHistory } from "react-router";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/spill" component={SpillEn}/>
    </Router>,
  document.getElementById('root')
);
