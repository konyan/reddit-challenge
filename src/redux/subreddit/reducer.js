import { SubredditTypes } from './type'

const initialState = {
  about: {},
  sortBy: 'hot',
  feedViewType: 'card',
  selectedNews: {
    page: 1,
    data: [],
    length: 0,
  },
}

const subredditReducer = (state = initialState, action) => {
  console.log('subredditReducer', action.type)
  switch (action.type) {
  case SubredditTypes.ABOUT:
    return {
      ...state,
      about: action.payload,
    }

  case SubredditTypes.SELECTED_NEWS:
    return {
      ...state,
      selectedNews: action.payload.selectedNews,
      sortBy: action.payload.sortBy,
    }

  case SubredditTypes.UPDATE_SORT_BY:
    console.log('UPDATE_SORT_BY', action.payload.sortBy)
    return {
      ...state,
      sortBy: action.payload.sortBy,
    }
  default:
    return state
  }
}

export default subredditReducer
