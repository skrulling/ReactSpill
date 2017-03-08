import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SpillEn from './components/SpillEn'
import JegHarAldri from './components/JegHarAldri'
import pekeLeken from './components/pekeLeken'
import './index.css';
import { Router, Route, hashHistory } from "react-router";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/spill" component={SpillEn}/>
        <Route path="/jegharaldri" component={JegHarAldri}/>
        <Route path="/pekeleken" component={pekeLeken}/>
    </Router>,
  document.getElementById('root')
);
