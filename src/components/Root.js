import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './Header'
import Home from './Home'
import Places from './Places'
import Favorites from './Favorites'

import { Grid } from 'react-bootstrap'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Grid>
          <div className='content-wrap'>
            <Route exact path="/" component={Home}/>
            <Route exact path="/places" component={Places}/>
            <Route path="/favorites" component={Favorites}/>
          </div>
        </Grid>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root