import { actionTypes } from '../actions'

export const initialState = {
  googlePlaces: null,
  favoritePlaces: [],
  isLoading: null,
  errorMessage: ''
}

export const contentCardsApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      })

    case actionTypes.GET_GOOGLE_PLACES_SUCCESS:
      return Object.assign({}, state, {
        googlePlaces: action.places,
        isLoading: false
      })

    case actionTypes.GET_GOOGLE_PLACES_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.err,
        isLoading: false
      })
  
    default: return state
  }
}
