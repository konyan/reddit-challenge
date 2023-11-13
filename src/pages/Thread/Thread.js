import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CommentPage from '../../components/Comment/CommentPage'
import Notification from '../../components/Notification/Notification'
import { getAbout } from '../../redux/subreddit/action'
import { redditPageInfo } from '../../redux/subreddit/selector'
import useThread from './useThread'

const Thread = ({ pageInfo }) => {
  const { commentList} = useThread();

  return (
    <section className="grid w-full grid-cols-3 gap-4">
      <div className="md:col-span-2 col-span-3">
        <CommentPage commentList={commentList} />
      </div>
      <div className="col-span-1">
        <Notification pageInfo={pageInfo} />
      </div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  pageInfo: redditPageInfo,
})

Thread.propTypes = {
  pageInfo: PropTypes.object,
}

export default connect(mapStateToProps, { getAbout })(Thread)
