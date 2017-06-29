import React from 'react'
import { PageHeader, Grid } from 'react-bootstrap'

const Home = () => (
  <div>
    <PageHeader bsClass='custom-page-header'>Read me</PageHeader>

    <Grid fluid>
      <div className='content'>
        <p>This is small app that uses google places public api to find nearby places.</p>
        <p>On <code>/places</code>page you will be asked to allow access to your geolocation. If denied default location will be used</p>
        <p>Favorite places can be selected and viewed on <code>/favorites</code> page</p>
      </div>
    </Grid>
  </div>
)

export default Home