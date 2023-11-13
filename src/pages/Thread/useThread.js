import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SUB_REDDIT } from '../../utils/setting';

const useThread = () => {

  const [commentList, setCommentList] = useState([])

  const {commentId} = useParams();

  const getComment = async () => {
    const response = await fetch(
      `https://www.reddit.com/r/${SUB_REDDIT}/comments/${commentId}/still_the_best_ti_win_celebration_ever/about.json`
    )
    const json = await response.json()
    setCommentList(json)
  }

  useEffect(() => {
    getComment()
  }, [])

  return {
    commentList
  }
}

export default useThread;