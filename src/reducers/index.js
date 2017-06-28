import { actionTypes } from '../actions'

export const initialState = {
  googlePlaces: null,
  favoritePlaces: [],
  isLoading: true,
  errorMessage: null
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

    case actionTypes.ADD_TO_FAVORITES:
      const newFavoritePlace = state.googlePlaces
        .filter((place) => place.id === action.id)
        .map((place) => {
          return Object.assign(place, {isFavorite: true})
        })
      const favoritePlaces = state.favoritePlaces.concat(newFavoritePlace)
      const googlePlaces = state.googlePlaces.map((place) => place.id === action.id ? newFavoritePlace[0] : place)

      return Object.assign({}, state, {
        favoritePlaces,
        googlePlaces
      })
  
    default: return state
  }
}
