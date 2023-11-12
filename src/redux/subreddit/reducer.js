import { SubredditTypes } from './type'

const initialState = {
  about: {},
  sortBy: 'hot',
  feedViewType: 'classic',
  selectedNews: {
    data:[],
    after: '',
  },
  error:false,
  errorMessage:''
}

const subredditReducer = (state = initialState, action) => {
  switch (action.type) {
  case SubredditTypes.ABOUT:
    return {
      ...state,
      about: action.payload,
    }

  case SubredditTypes.SELECTED_NEWS:
    return {
      ...state,
      selectedNews: {...action.payload.selectedNews},
      sortBy: action.payload.sortBy,
    }

  case SubredditTypes.UPDATE_SORT_BY:
    return {
      ...state,
      sortBy: action.payload.sortBy,
      selectedNews: []
    }

  case SubredditTypes.UPDATE_FEED_VIEW_TYPE:
    return {
      ...state,
      feedViewType: action.payload.feedViewType,
    }
  default:
    return state
  }
}

export default subredditReducer
