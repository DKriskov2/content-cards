import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { PageHeader } from 'react-bootstrap'

class Favorites extends Component {
  render() {
    return (
      <div>
        <PageHeader bsClass='custom-page-header'>Favorites</PageHeader>
      </div>
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