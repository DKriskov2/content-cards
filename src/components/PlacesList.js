import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { CSSTransitionGroup } from 'react-transition-group'

import PlaceItem from './PlaceItem'

class PlacesList extends Component {

  render () {
    let placesList = null
    if (this.props.places) {
      placesList = this.props.places.map((place) => 
        <div key={place.id}>
          <PlaceItem place={place} onFavoriteClick={this.props.onFavoriteClick} />
        </div>
      )
    }
    return (
      <Row>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {placesList}
        </CSSTransitionGroup>
      </Row>
    )
  }
}

PlacesList.PropTypes = {
  places: PropTypes.array.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
}

export default PlacesList