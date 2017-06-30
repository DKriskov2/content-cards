import fetch from 'isomorphic-fetch'

export default function getGooglePlacesService (location) {
  let options = {
    radius: 500,
    location: '45.8098063,15.9676489'
  }

  if (location) {
    options = Object.assign(options, {
      location: `${location.lat},${location.long}`
    })
  }

  return fetch(`http://localhost:3333/nearbysearch/${options.location}/${options.radius}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}