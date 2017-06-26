import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionTypes from '../actions'
import getUserLocation from '../services/getUserLocation'

import { PageHeader, Grid } from 'react-bootstrap'
import PlacesList from './PlacesList'
 
class Places extends Component {
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

  render() {
    return (
      <div>
        <PageHeader bsClass='custom-page-header'>Nearby places list</PageHeader>

        <Grid fluid>
         {this.props.errorMessage ? (
          <div className='content'>
            <p>{this.props.errorMessage}</p>
          </div>
         ) : (
           <PlacesList places={this.props.googlePlaces} />
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
    getGooglePlaces: bindActionCreators(actionTypes.getGooglePlaces, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places)
