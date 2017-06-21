import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        dggdsdfgds
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
