import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../actions'
import { PageHeader, Grid } from 'react-bootstrap'

import PlacesList from './PlacesList'

class Favorites extends Component {
  constructor () {
    super ()

    this.onFavoriteClick = this.onFavoriteClick.bind(this)
  }

  onFavoriteClick (place) {
    this.props.removeFromFavorites(place.id)
  }

  render() {
    return (
      <div>
        <PageHeader bsClass='custom-page-header'>Favorites</PageHeader>

        <Grid fluid>
          {this.props.favoritePlaces.length === 0 ? (
            <div className='content'>
              <p>No favorite places selected</p>
            </div>
          ) : (
            <PlacesList places={this.props.favoritePlaces} onFavoriteClick={this.onFavoriteClick} />
          )}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoritePlaces: state.favoritePlaces
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: bindActionCreators(actionTypes.removeFromFavorites, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)