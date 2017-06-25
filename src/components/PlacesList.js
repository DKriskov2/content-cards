import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-bootstrap'

class PlacesList extends Component {

  componentWillReceiveProps (obj) {
    console.log(obj)
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>dfsdfdsdf</Col>
          <Col xs={6} md={4}>cvxfvcx</Col>
          <Col xsHidden md={4}>fdffdsgfsd</Col>
        </Row>
      </Grid>
    )
  }
}

PlacesList.PropTypes = {
  places: PropTypes.array.isRequired
}

export default PlacesList