import { SubredditTypes } from './type'

const initialState = {
  about: {},
  hot: [],
}

const subredditReducer = (state = initialState, action) => {
  switch (action.type) {
    case SubredditTypes.ABOUT:
      return {
        ...state,
        about: action.payload,
      }

    case SubredditTypes.HOT:
      return {
        ...state,
        hot: action.payload,
      }

    default:
      return state
  }
}

export default subredditReducer
