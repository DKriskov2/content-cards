import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.getGooglePlaces()
  }

  render() {
    return (
      <div className="App">
        { this.props.isLoading && 
          <span>dgsgfgfs</span>
        }
      </div>
    );
  }
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
