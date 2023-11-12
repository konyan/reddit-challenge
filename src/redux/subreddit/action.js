import { SUB_REDDIT } from '../../utils/setting'
import { SubredditTypes } from './type'

export const getAbout = (subreddit) => async (dispatch) => {
  subreddit = subreddit || SUB_REDDIT
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
  const json = await response.json()
  dispatch({
    type: SubredditTypes.ABOUT,
    payload: json.data,
  })
}

export const getSelectedNews = (subreddit, sortBy, page, after) => async (dispatch) => {
  const post_per_page = 10
  page = page || 1
  const count = post_per_page * page - post_per_page
  subreddit = subreddit || SUB_REDDIT
  sortBy = sortBy || 'hot'
  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}/${sortBy}.json?limit=${post_per_page}&count=${count}&after=${after}`
  )
  const json = await response.json()
  dispatch({
    type: SubredditTypes.SELECTED_NEWS,
    payload: {
      selectedNews: {
        page,
        data: json.data.children,
        after: json.data.after,
        before: json.data.before,
      },
      sortBy,
    },
  })
}

export const updateSortBy = (sortBy) => async (dispatch) => {
  dispatch({
    type: SubredditTypes.UPDATE_SORT_BY,
    payload: {
      sortBy,
    },
  })
}

export const updateFeedViewType = (feedViewType) => async (dispatch) => {
  dispatch({
    type: SubredditTypes.UPDATE_FEED_VIEW_TYPE,
    payload: {
      feedViewType,
    },
  })
}