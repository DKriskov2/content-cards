import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Panel } from 'react-bootstrap'

class PlacesList extends Component {

  componentWillReceiveProps (obj) {
    console.log(obj)
  }

  render () {
    return (
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Panel className='place-box'>
            <div className='place-box__header'>
              <div className='place-box__overlay'></div>
              <h2 className='place-box__title'>Yitltds</h2>
              <span className='place-box__favorite-icon'></span>
            </div>
            <div className='place-box__content'>
              <span className='place-box__type-icon'></span>
              <p className='place-box__descripton'>Lorem ipsum</p>
            </div>
          </Panel>
        </Col>
      </Row>
    )
  }
}

PlacesList.PropTypes = {
  places: PropTypes.array.isRequired
}

export default PlacesList