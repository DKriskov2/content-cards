import getGooglePlacesService from '../services/getGooglePlacesService'

export const actionTypes = {
  START_LOADING: 'START_LOADING',
  GET_GOOGLE_PLACES: 'GET_GOOGLE_PLACES',
  GET_GOOGLE_PLACES_SUCCESS: 'GET_GOOGLE_PLACES_SUCCESS',
  GET_GOOGLE_PLACES_ERROR: 'GET_GOOGLE_PLACES_ERROR'
}

export const startLoadingPlaces = () => {
  return { type: actionTypes.START_LOADING }
}

export const getGooglePlaces = (location) => dispatch => {
  dispatch(startLoadingPlaces())

  getGooglePlacesService(location)
  .then(res => {
    if (res && res.status === 'OK') {
      dispatch(getGooglePlacesSuccess(res.results))
    } else {
      dispatch(getGooglePlacesError('Error loading places'))
    }
  })
}

export const getGooglePlacesSuccess = (places) => {
  return { type: actionTypes.GET_GOOGLE_PLACES_SUCCESS, places }
}

export const getGooglePlacesError = (err) => {
  return { type: actionTypes.GET_GOOGLE_PLACES_ERROR, err }
}