import React from 'react'
import { PageHeader, Grid } from 'react-bootstrap'

const Home = () => (
  <div>
    <PageHeader bsClass='custom-page-header'>Read me</PageHeader>

    <Grid fluid>
      <div className='content'>
        <p>This is small that app uses google places public api to find nearby places.</p>
        <p>You will be asked to allow access to your geolocation. If denied default location will be used</p>
      </div>
    </Grid>
  </div>
)

export default Home