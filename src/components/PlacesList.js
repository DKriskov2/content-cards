import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'

import PlaceItem from './PlaceItem'

class PlacesList extends Component {

  render () {
    let placesList = null
    if (this.props.places) {
      placesList = this.props.places.map((place) => 
        <PlaceItem key={place.id} place={place} />
      )
    }
    return (
      <Row>
        {placesList}
      </Row>
    )
  }
}

PlacesList.PropTypes = {
  places: PropTypes.array.isRequired
}

export default PlacesList