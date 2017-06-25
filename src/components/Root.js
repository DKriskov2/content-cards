import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './Header'
import Home from './Home'
import Places from './Places'
import Favorites from './Favorites'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/places" component={Places}/>
        <Route path="/favorites" component={Favorites}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root