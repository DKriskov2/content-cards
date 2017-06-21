import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Favorites extends Component {
  render() {
    return (
      <div>test</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)