import {SubredditTypes} from './type';


export const getAbout = (subreddit) => async (dispatch) => {
  subreddit = subreddit || 'dota2';
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`);
  const json = await response.json();
  dispatch({
    type: SubredditTypes.ABOUT,
    payload: json.data,
  });
}

export const getHot = (subreddit) => async (dispatch) => {
  subreddit = subreddit || 'dota2';
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`);
  const json = await response.json();
  dispatch({
    type: SubredditTypes.HOT,
    payload: json.data.children,
  });
}