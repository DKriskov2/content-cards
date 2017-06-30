import React, {Component} from 'react'
import { connect } from 'react-redux'
import { PageHeader, Grid } from 'react-bootstrap'

class Place extends Component {

  render () {
    console.log(this.props.match.params, this.props.googlePlaces)
    return (
      <div>
        <PageHeader bsClass='custom-page-header'>Place</PageHeader>

        <Grid fluid>
          <div className='content'>
            dsdgfsgfd
          </div>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    googlePlaces: state.googlePlaces
  }
}

export default connect(mapStateToProps, {})(Place)