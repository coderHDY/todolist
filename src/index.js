import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import "./index.css";
import { AliveScope } from 'react-activation'

ReactDOM.render((
  <HashRouter>
    <AliveScope>
      <App />
    </AliveScope>
  </HashRouter>
), document.getElementById('root'))
