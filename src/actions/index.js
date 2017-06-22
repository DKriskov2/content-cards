import getGooglePlacesService from '../services/getGooglePlacesService'

export const actionTypes = {
  START_LOADING: 'START_LOADING',
  GET_GOOGLE_PLACES: 'GET_GOOGLE_PLACES',
  GET_GOOGLE_PLACES_SUCCESS: 'GET_GOOGLE_PLACES_SUCCESS'
}

export const startLoadingPlaces = () => {
  return { type: actionTypes.START_LOADING }
}

export const getGooglePlaces = (location) => dispatch => {
  dispatch(startLoadingPlaces())

  getGooglePlacesService(location)
}

export const getGooglePlacesSuccess = () => {
  return { type: actionTypes.GET_GOOGLE_PLACES_SUCCESS }
}