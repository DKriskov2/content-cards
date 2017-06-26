import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Panel } from 'react-bootstrap'
import Truncate from 'react-truncate'

const GOOGLE_PLACES_API = process.env.REACT_APP_GOOGLE_PLACES_API
const GOOGLE_PLACES_KEY = process.env.REACT_APP_GOOGLE_PLACES_KEY

class PlacesList extends Component {

  componentWillReceiveProps (obj) {
    console.log(obj)
  }

  render () {
    return (
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Panel className='place-box'>
            <div className='place-box__header' style={{backgroundImage: getBgImage('CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU')}}>
              <div className='place-box__overlay'></div>
              <h2 className='place-box__title'>Yitltds fsfaa fafa fsaffafad fasafas fsaafsaafs fsdfsdsf fddfssdffdssfd fd ddfsdfd fdfdsfdfds fdsfdsfdsfd dsffdsfdfs fdsffdsfds dffd</h2>
              <span className="glyphicon glyphicon-heart place-box__favorite-icon" aria-hidden="true"></span>
            </div>
            <div className='place-box__content'>
              <span className='place-box__type-icon'
                style={{backgroundImage: 'url(https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png)'}}>
              </span>
              <p className='place-box__description'>
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  {'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum dsfs sddsfgdg gdsggds dssgsd'}
                </Truncate>
              </p>
            </div>
          </Panel>
        </Col>
      </Row>
    )
  }
}

const getBgImage = (photoReference) => {
  return `url(${GOOGLE_PLACES_API}photo?maxwidth=400&photoreference=${photoReference}&key=${GOOGLE_PLACES_KEY})`
}

PlacesList.PropTypes = {
  places: PropTypes.array.isRequired
}

export default PlacesList