import React, {Component} from 'react'
import { connect } from 'react-redux'
import { PageHeader, Grid, Col } from 'react-bootstrap'
import { find } from 'lodash'

import getPlaceImage from '../utils/getPlaceImage'

class Place extends Component {

  render () {
    const place = find(this.props.googlePlaces, ['id', this.props.match.params.id])
    return (
      <div className='place-details'>
        <PageHeader bsClass='custom-page-header'>{place ? place.name : 'Places not loaded'}</PageHeader>

        { place &&
          <Grid fluid>
            <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
              <div className='place-details__image-cont'>
                { place.photos && <img className='place-details__image img-thumbnail' src={getPlaceImage(place.photos)} alt={place.name} /> }
              </div>
              <p className='place-details__content'>vicinity: {place.vicinity}</p>
            </Col>
          </Grid>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    googlePlaces: state.googlePlaces
  }
}

export default connect(mapStateToProps, {})(Place)