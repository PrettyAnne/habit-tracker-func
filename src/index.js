import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
