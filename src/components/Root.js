import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './Header'
import App from './App'
import Favorites from './Favorites'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={App}/>
        <Route path="/favorites" component={Favorites}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root