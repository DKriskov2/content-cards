import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import { contentCardsApp, initialState } from './reducers'

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

let store = createStore(contentCardsApp, initialState)

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
