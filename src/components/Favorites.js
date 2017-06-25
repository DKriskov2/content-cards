import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { PageHeader, Grid } from 'react-bootstrap'

class Favorites extends Component {
  render() {
    return (
      <div>
        <PageHeader bsClass='custom-page-header'>Favorites</PageHeader>

        <Grid fluid>
          fdsfds
        </Grid>
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