import Timeline from '../../components/Timeline/Timeline'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getAbout, getSelectedNews, updateSortBy,updateFeedViewType } from '../../redux/subreddit/action'
import {
  redditPageInfo,
  redditNews,
  redditSortBy,
  redditFeedViewType,
} from '../../redux/subreddit/selector'
import PropTypes from 'prop-types'
import Button from '../../components/Button/Button'
import PopMenu from '../../components/PopMenu/PopMenu'
import {
  Bars4Icon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import InfiniteList from '../../components/InfiniteList/InfiniteList'
import Notification from '../../components/Notification/Notification'
import useSubReddit from './useSubReddit'

const SubReddit = ({
  pageInfo,
  news,
  getSelectedNews,
  sortBy,
  updateSortBy,
  getAbout,
  feedViewType,
  updateFeedViewType
}) => {

  const {sortByMenus,feedViewTypeMenus,fetchAgain,createPost,data} = useSubReddit({
    news,
    getSelectedNews,
    sortBy,
    updateSortBy,
    getAbout,
    feedViewType,
    updateFeedViewType
  });

  return (
    <div>
      {pageInfo && (
        <Timeline
          bannerBgImage={pageInfo.banner_img}
          communityIcon={pageInfo.icon_img}
          communityName={pageInfo.display_name_prefixed}
        />
      )}

      <section className="grid w-full grid-cols-3 gap-4">
        <div className="md:col-span-2 col-span-3">
          <div className="flex justify-between pb-4">
            <Button
              text="Create a Post"
              onClick={createPost}
              className="border text-black hover:bg-gray-100"
            />
            <div className="flex flex-row items-center justify-center">
              <p className="mr-4 text-xs">Sort By:</p>
              <PopMenu
                icon={<ChevronDownIcon className="h-4 w-4" color="black" />}
                text={<p className="text-xs uppercase text-black">{sortBy}</p>}
                menuItems={sortByMenus}
              />
              <PopMenu
                icon={<ChevronDownIcon className="h-4 w-4" color="black" />}
                text={<Bars4Icon className="h-4 w-4 text-black" />}
                menuItems={feedViewTypeMenus}
              />
            </div>
          </div>

          {data.length && <InfiniteList news={data} feedViewType={feedViewType} fetchAgain={fetchAgain}/>}
        </div>
        {pageInfo && <div className="col-span-1 relative">
          <Notification pageInfo={pageInfo} />
        </div>}
      </section>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  pageInfo: redditPageInfo,
  news: redditNews,
  sortBy: redditSortBy,
  feedViewType: redditFeedViewType,
})

SubReddit.propTypes = {
  pageInfo: PropTypes.object,
  getAbout: PropTypes.func,
  getSelectedNews: PropTypes.func,
  news: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  feedViewType: PropTypes.string.isRequired,
  updateSortBy: PropTypes.func.isRequired,
  updateFeedViewType: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,  { getAbout, getSelectedNews, updateSortBy ,updateFeedViewType})(SubReddit)
