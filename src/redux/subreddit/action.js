import { SUB_REDDIT } from '../../utils/setting'
import { SubredditTypes } from './type'
import {POST_PER_PAGE} from '../../utils/setting';

export const getAbout = (subreddit) => async (dispatch) => {
  subreddit = subreddit || SUB_REDDIT
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`)

  try {
    const json = await response.json()
    return  dispatch({
      type: SubredditTypes.ABOUT,
      payload: json.data,
    })
  } catch (error) {
    return dispatch({
      type: SubredditTypes.ERROR,
      payload: {
        errorMessage:error.message
      }
    })
  }

}

export const getSelectedNews = (subreddit, sortBy, after = null) => async (dispatch) => {
  subreddit = subreddit || SUB_REDDIT
  sortBy = sortBy || 'hot'

  const baseUrl = `https://www.reddit.com/r/${subreddit}/${sortBy}.json`;
  const params = new URLSearchParams({
    limit: POST_PER_PAGE,
    after,
  });

  const response = await fetch(`${baseUrl}?${params.toString()}`);

  try{
    const json = await response.json()
    return dispatch({
      type: SubredditTypes.SELECTED_NEWS,
      payload: {
        selectedNews:{
          data:json.data.children,
          after:json.data.after
        },
        sortBy,
      },
    })
  }catch(error){
    return dispatch({
      type: SubredditTypes.ERROR,
      payload: {
        errorMessage:error.message
      }
    })
  }
}

export const updateSortBy = (sortBy) => async (dispatch) => {
  return  dispatch({
    type: SubredditTypes.UPDATE_SORT_BY,
    payload: {
      sortBy,
    },
  })
}

export const updateFeedViewType = (feedViewType) => async (dispatch) => {
  return dispatch({
    type: SubredditTypes.UPDATE_FEED_VIEW_TYPE,
    payload: {
      feedViewType,
    },
  })
}