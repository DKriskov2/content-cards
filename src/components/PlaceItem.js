import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Panel } from 'react-bootstrap'
import Truncate from 'react-truncate'

const GOOGLE_PLACES_API = process.env.REACT_APP_GOOGLE_PLACES_API
const GOOGLE_PLACES_KEY = process.env.REACT_APP_GOOGLE_PLACES_KEY

class PlaceItem extends Component {
  
  render () {
    const { place } = this.props
    return (
      <Col xs={12} sm={6} md={3}>
        <Panel className='place-box'>
          <div className='place-box__header' style={{backgroundImage: getBgImage(place.photos)}}>
            <div className='place-box__overlay'></div>
            <h2 className='place-box__title'>{place.name}</h2>
            <span className="glyphicon glyphicon-heart place-box__favorite-icon" aria-hidden="true"></span>
          </div>
          <div className='place-box__content'>
            <span className='place-box__type-icon'
              style={{backgroundImage: `url(${place.icon})`}}>
            </span>
            <p className='place-box__description'>
              <Truncate lines={2} ellipsis={<span>...</span>}>
                {place.vicinity}
              </Truncate>
            </p>
          </div>
        </Panel>
      </Col>
    )
  }
}

const getBgImage = (placePhotos) => {
  const photoReference = placePhotos ? placePhotos[0].photo_reference : ''
  if (photoReference !== '') {
    return `url(${GOOGLE_PLACES_API}photo?maxwidth=400&photoreference=${photoReference}&key=${GOOGLE_PLACES_KEY})`
  }
}

PlaceItem.PropTypes = {
  place: PropTypes.object.isRequired
}

export default PlaceItem