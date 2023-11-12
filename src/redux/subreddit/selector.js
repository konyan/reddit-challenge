import { createSelector } from 'reselect'

const selectSubReddit = (state) => state.subreddit

export const redditPageInfo = createSelector([selectSubReddit], (subreddit) => subreddit.about)

export const redditNews = createSelector([selectSubReddit], (subreddit) => subreddit.selectedNews)

export const redditSortBy = createSelector([selectSubReddit], (subreddit) => subreddit.sortBy)

export const redditFeedViewType = createSelector([selectSubReddit], (subreddit) => subreddit.feedViewType)