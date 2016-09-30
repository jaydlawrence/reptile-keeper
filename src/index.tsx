import React = require('react');
import ReactDOM = require('react-dom');
import App from './App';

function start() {
  const container = window.document.querySelector('.container');
  ReactDOM.render(<App />, container);
}

window.addEventListener('load', start);
