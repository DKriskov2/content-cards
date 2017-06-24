import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionTypes from '../actions'
import getUserLocation from '../services/getUserLocation'

import { PageHeader } from 'react-bootstrap'

const GOOGLE_PLACES_API = process.env.REACT_APP_GOOGLE_PLACES_API
const GOOGLE_PLACES_KEY = process.env.REACT_APP_GOOGLE_PLACES_KEY
 
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
        <div className='test' style={{backgroundImage: getBgImage('CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU')}}></div>
        <PageHeader bsClass='custom-page-header'>Nearby places list</PageHeader>
      </div>
    );
  }
}

const getBgImage = (photoReference) => {
  return `url(${GOOGLE_PLACES_API}photo?maxwidth=400&photoreference=${photoReference}&key=${GOOGLE_PLACES_KEY})`
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
