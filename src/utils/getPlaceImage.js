const GOOGLE_PLACES_API = process.env.REACT_APP_GOOGLE_PLACES_API
const GOOGLE_PLACES_KEY = process.env.REACT_APP_GOOGLE_PLACES_KEY

export default function getPlaceImage (placePhotos) {
  const photoReference = placePhotos ? placePhotos[0].photo_reference : ''
  if (photoReference !== '') {
    return `${GOOGLE_PLACES_API}photo?maxwidth=400&photoreference=${photoReference}&key=${GOOGLE_PLACES_KEY}`
  }
}