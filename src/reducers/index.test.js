import { contentCardsApp as reducer } from './index'
import { actionTypes } from '../actions'

describe('content cards reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        googlePlaces: null,
        favoritePlaces: [],
        isLoading: true,
        errorMessage: null
      }
    )
  })

  it('should start loading', () => {
    expect(reducer({
      googlePlaces: null,
      favoritePlaces: [],
      isLoading: null,
      errorMessage: null
    }, {
      type: actionTypes.START_LOADING
    })).toEqual(
      {
        googlePlaces: null,
        favoritePlaces: [],
        isLoading: true,
        errorMessage: null
      }
    )
  })

  it('should add google places', () => {
    expect(reducer({
      googlePlaces: null,
      favoritePlaces: [],
      isLoading: true,
      errorMessage: null
    }, {
      type: actionTypes.GET_GOOGLE_PLACES_SUCCESS,
      places: [{
        id: '123',
        name: 'test1'
      }]
    })).toEqual(
      {
        googlePlaces: [{
          id: '123',
          name: 'test1'
        }],
        favoritePlaces: [],
        isLoading: false,
        errorMessage: null
      }
    )
  })

  it('should return google places error', () => {
    expect(reducer({
      googlePlaces: null,
      favoritePlaces: [],
      isLoading: true,
      errorMessage: null
    }, {
      type: actionTypes.GET_GOOGLE_PLACES_ERROR,
      err: 'Google places error'
    })).toEqual(
      {
        googlePlaces: null,
        favoritePlaces: [],
        isLoading: false,
        errorMessage: 'Google places error'
      }
    )
  })

  it('should add place to favorites', () => {
    expect(reducer({
      googlePlaces: [
        {
          id: '1',
          name: 'test1'
        }, {
          id: '2',
          name: 'test2' 
        }
      ],
      favoritePlaces: [],
      isLoading: false,
      errorMessage: null
    }, {
      type: actionTypes.ADD_TO_FAVORITES,
      id: '1'
    })).toEqual(
      {
        googlePlaces: [
          {
            id: '1',
            name: 'test1',
            isFavorite: true
          }, {
            id: '2',
            name: 'test2' 
          }
        ],
        favoritePlaces: [{
          id: '1',
          name: 'test1',
          isFavorite: true
        }],
        isLoading: false,
        errorMessage: null
      }
    )
  })

  it('should remove from favorites', () => {
    expect(reducer({
      googlePlaces: [
        {
          id: '1',
          name: 'test1',
          isFavorite: true
        }, {
          id: '2',
          name: 'test2',
          isFavorite: true
        }, {
          id: '3',
          name: 'test3',
        }
      ],
      favoritePlaces: [
        {
          id: '1',
          name: 'test1',
          isFavorite: true
        }, {
          id: '2',
          name: 'test2',
          isFavorite: true
        }
      ],
      isLoading: false,
      errorMessage: null
    }, {
      type: actionTypes.REMOVE_FROM_FAVORITES,
      id: '1'
    })).toEqual(
      {
        googlePlaces: [
          {
            id: '1',
            name: 'test1',
            isFavorite: false
          }, {
            id: '2',
            name: 'test2',
            isFavorite: true
          }, {
            id: '3',
            name: 'test3',
          }
        ],
        favoritePlaces: [{
          id: '2',
          name: 'test2',
          isFavorite: true
        }],
        isLoading: false,
        errorMessage: null
      }
    )
  })
})
