// eslint-disable-next-line no-undef
export const SUB_REDDIT=process.env.REACT_APP_SUBREDDIT;


export const POST_PER_PAGE = 10;


export const formatNumber = (number) =>{
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
}
