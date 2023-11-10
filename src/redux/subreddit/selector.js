import { createSelector } from 'reselect';

const selectSubReddit = (state) => state.subreddit;

export const redditPageInfo = createSelector([selectSubReddit], (subreddit) => subreddit.about);