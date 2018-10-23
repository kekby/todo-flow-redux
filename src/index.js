import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<Provider store={store}><div>Hello!</div></Provider>, root); //eslint-disable-line
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
