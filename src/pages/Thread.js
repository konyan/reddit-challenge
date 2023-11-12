import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import SideMenu from '../components/SideMenu/SideMenu'
import CommentPage from '../components/Comment/CommentPage'
import Notification from '../components/Notification/Notification'
import { getAbout } from '../redux/subreddit/action'
import { redditPageInfo } from '../redux/subreddit/selector'
import { useParams } from 'react-router-dom'

const Thread = ({ pageInfo }) => {
  const [commentList, setCommentList] = useState([])

  const {commentId} = useParams();

  const getComment = async () => {
    const response = await fetch(
      `https://www.reddit.com/r/DotA2/comments/${commentId}/still_the_best_ti_win_celebration_ever/about.json`
    )
    const json = await response.json()

    console.log("JSON",json);
    setCommentList(json)
  }

  useEffect(() => {
    getComment()
  }, [])

  return (
    <div className="px-4">
      <div className="mx-auto mt-8 grid w-full grid-cols-4 gap-4">
        <section className="col-span-1 hidden h-[1200px] overflow-scroll lg:block">
          <SideMenu />
        </section>
        <section
          className="col-span-4 overflow-scroll pb-8 lg:col-span-3"
          style={{
            height: 'calc(100vh - 80px)',
          }}
        >
          <section className="grid w-full grid-cols-3 gap-4">
            <div className="col-span-2">
              <CommentPage commentList={commentList} />
            </div>
            <div className="col-span-1">
              <Notification pageInfo={pageInfo} />
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  pageInfo: redditPageInfo,
})

Thread.propTypes = {
  pageInfo: PropTypes.object,
}

export default connect(mapStateToProps, { getAbout })(Thread)
