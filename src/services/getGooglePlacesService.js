import fetch from 'isomorphic-fetch'

export default function getGooglePlacesService (location) {
  let options = {
    radius: 500,
    location: '-32.8670522,151.1957362'
  }

  if (location) {
    options = Object.assign(options, {
      location: `${location.lat},${location.long}`
    })
  }

  return fetch(`http://localhost:8000/nearbysearch/${options.location}/${options.radius}`)
    .then(res => {
      console.log(res)
      // return res.json()
    })
    .catch(err => console.log(err))
}