import fetch from 'isomorphic-fetch'

export default function getGooglePlacesService () {
  return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyBzslEGtQy17iOS7PLYWq-VK4TQjJAvcrI`)
    .then(
      res => console.log(res)
    )
}