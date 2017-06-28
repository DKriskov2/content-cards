import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { PageHeader, Grid } from 'react-bootstrap'

import * as actionTypes from '../actions'
import getUserLocation from '../services/getUserLocation'

import PlacesList from './PlacesList'
import Loader  from './Loader'
 
class Places extends Component {
  constructor () {
    super()

    this.addToFavorites = this.addToFavorites.bind(this)
  }

  componentDidMount() {
    if (!this.props.googlePlaces) {
      getUserLocation()
        .then(res => {
          this.props.getGooglePlaces(res)
        })
        .catch(() => {
          this.props.getGooglePlaces()
        })
    }
  }

  addToFavorites (id) {
    this.props.addToFavorites(id)
  }

  render() {
    return (
      <div>
        <PageHeader bsClass='custom-page-header'>Nearby places list</PageHeader>

        <Grid fluid>
          { this.props.isLoading && <Loader /> }
          {this.props.errorMessage ? (
            <div className='content'>
              <p>{this.props.errorMessage}</p>
            </div>
          ) : (
            <PlacesList places={this.props.googlePlaces} addToFavorites={this.addToFavorites} />
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    googlePlaces: state.googlePlaces,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGooglePlaces: bindActionCreators(actionTypes.getGooglePlaces, dispatch),
    addToFavorites: bindActionCreators(actionTypes.addToFavorites, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places)
