import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionTypes from '../actions'

import getUserLocation from '../services/getUserLocation'
 
class App extends Component {
  componentDidMount() {
    // todo: search user location and google places just once
    getUserLocation()
      .then(res => {
        this.props.getGooglePlaces(res)
      })
      .catch(() => {
        this.props.getGooglePlaces()
      })
  }

  render() {
    return (
      <div className="App">
        { this.props.isLoading && 
          <div className='test' style={{backgroundImage: getBgImage('CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU')}}></div>
        }
      </div>
    );
  }
}

const getBgImage = (photoReference) => {
  return `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBzslEGtQy17iOS7PLYWq-VK4TQjJAvcrI)`
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGooglePlaces: bindActionCreators(actionTypes.getGooglePlaces, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
