import { SubredditTypes } from './type';

const initialState = {
  about: {},
};

const subredditReducer = (state = initialState, action) => {
  switch (action.type) {
  case SubredditTypes.ABOUT:
    return {
      ...state,
      about: action.payload,
    };
  default:
    return state;
  }
};

export default subredditReducer;