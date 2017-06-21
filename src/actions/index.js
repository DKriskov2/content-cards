export const actionTypes = {
  GET_CONTENT_CARDS: 'GET_CONTENT_CARDS',
  GET_CONTENT_CARDS_SUCCESS: 'GET_CONTENT_CARDS_SUCCESS'
}

export const getContentCards = () => {
  return { type: actionTypes.GET_CONTENT_CARDS }
}

export const getContentCardsSuccess = () => {
  return { type: actionTypes.GET_CONTENT_CARDS_SUCCESS }
}