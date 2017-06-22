import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { contentCardsApp, initialState } from './reducers'

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

let store = createStore(contentCardsApp, initialState, applyMiddleware(thunk))

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
