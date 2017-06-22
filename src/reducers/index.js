import { actionTypes } from '../actions'

export const initialState = {
  contentCards: [],
  favoriteCards: [],
  isLoading: null
}

export const contentCardsApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      })

    case actionTypes.GET_GOOGLE_PLACES_SUCCESS:
      console.log(action)
      return state
  
    default: return state
  }
}
