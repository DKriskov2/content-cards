import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Panel } from 'react-bootstrap'
import Truncate from 'react-truncate'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import getPlaceImage from '../utils/getPlaceImage'

class PlaceItem extends Component {

  render () {
    const { place } = this.props
    const favoriteIconClasses = classNames(
      'glyphicon',
      'glyphicon-heart',
      'place-box__icon',
      'place-box__icon--favorite',
      { 'place-box__icon--active': place.isFavorite })

    return (
      <Col xs={12} sm={6} md={3}>
        <Panel className='place-box'>
          <div className='place-box__header' style={{backgroundImage: `url(${getPlaceImage(place.photos)}`}}>
            <div className='place-box__overlay'></div>
            <h2 className='place-box__title'>{place.name}</h2>
            <Link to={`/places/${place.id}`}>            
              <span 
                className='glyphicon glyphicon-open place-box__icon place-box__icon--open' 
                aria-hidden="true">
              </span>
            </Link>
            <span 
              className={favoriteIconClasses} 
              aria-hidden="true" 
              onClick={() => this.props.onFavoriteClick(place)}>
            </span>
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

PlaceItem.PropTypes = {
  place: PropTypes.object.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
}

export default PlaceItem