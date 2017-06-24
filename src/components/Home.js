import React from 'react'
import { PageHeader } from 'react-bootstrap'

const Home = () => (
  <div>
    <PageHeader bsClass='custom-page-header'>Read me</PageHeader>

    <div className='content'>
      <p>This is small that app uses google places public api to find nearby places.</p>
      <p>You will be asked to allow access to your geolocation. If denied default location will be used</p>
    </div>
  </div>
)

export default Home