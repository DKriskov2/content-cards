import fetch from 'isomorphic-fetch'

import encodeOptions from '../utils/encodeOptions'

// const GOOGLE_API_URL = process.env.REACT_APP_GOOGLE_API_URL
const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

export default function getGooglePlacesService (location) {
  let options = {
    key: 'AIzaSyBzslEGtQy17iOS7PLYWq-VK4TQjJAvcrI',
    radius: 500,
    location: '-32.8670522,151.1957362'
  }

  if (location) {
    options = Object.assign(options, {
      location: `${location.lat},${location.long}`
    })
  }

  const encodedOptions = encodeOptions(options)

  return fetch(GOOGLE_API_URL + `?${encodedOptions}`)
    .then(
      res => console.log(res)
    )
}