import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import Favorites from './Favorites'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>

        <hr/>

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