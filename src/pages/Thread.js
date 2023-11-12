import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Navbar from '../components/Navbar/Navbar'
import SideMenu from '../components/SideMenu/SideMenu'
import Timeline from '../components/Timeline/Timeline'
import CommentPage from '../components/Comment/CommentPage'
import Notification from '../components/Notification/Notification'
import { getAbout } from '../redux/subreddit/action'
import { redditHot, redditPageInfo } from '../redux/subreddit/selector'

const Thread = ({ pageInfo}) => {
  const [commentList, setCommentList] = useState([])

  const getComment = async () => {
    const response = await fetch(
      `https://www.reddit.com/r/DotA2/comments/17svit4/still_the_best_ti_win_celebration_ever/about.json`
    )
    const json = await response.json()
    setCommentList(json)
  }

  useEffect(() => {
    getComment()
  }, [])

  return (
    <div className="px-4">
      <Navbar />
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
          <Timeline
            bannerBgImage={pageInfo.banner_img}
            communityIcon={pageInfo.icon_img}
            communityName={pageInfo.display_name_prefixed}
          />

          <section className="grid w-full grid-cols-3 gap-4">
            <div className="col-span-2">
              {/* <div className="flex justify-between py-4">
                <Button
                  text="Create a Post"
                  onClick={createPost}
                  className="border text-black hover:bg-gray-100"
                />
                <div>
                  <p>Sort By:</p>
                </div>
              </div> */}

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