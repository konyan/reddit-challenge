/* eslint-disable no-unused-vars */
import Timeline from '../components/Timeline/Timeline'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getAbout, getSelectedNews, updateSortBy,updateFeedViewType } from '../redux/subreddit/action'
import {
  redditPageInfo,
  redditNews,
  redditSortBy,
  redditFeedViewType,
} from '../redux/subreddit/selector'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button/Button'
import PopMenu from '../components/PopMenu/PopMenu'
import {
  Bars2Icon,
  Bars3Icon,
  Bars4Icon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { useSearchParams } from 'react-router-dom'
import { SUB_REDDIT } from '../utils/setting'
import InfiniteList from '../components/InfiniteList/InfiniteList'
import Notification from '../components/Notification/Notification'

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
  let [searchParams, setSearchParams] = useSearchParams()
  const [data , setData] = useState([])


  const sortByMenus = [
    {
      text: 'Hot',
      onClick: () => onChangeSortBy('hot'),
      active: sortBy === 'hot',
    },
    {
      text: 'New',
      onClick: () => onChangeSortBy('new'),
      active: sortBy === 'new',
    },
    {
      text: 'Top',
      onClick: () => onChangeSortBy('top'),
      active: sortBy === 'top',
    },
    {
      text: 'Rising',
      onClick: () => onChangeSortBy('rising'),
      active: sortBy === 'rising',
    },
  ]

  const feedViewTypeMenus = [
    {
      text: 'Card',
      onClick: () =>onChangeFeedViewType('card'),
      active: feedViewType === 'card',
      icon: <Bars2Icon className="mr-3 h-4 w-4 text-black" />,
    },
    {
      text: 'Classic',
      onClick: () => onChangeFeedViewType('classic'),
      active: feedViewType === 'classic',
      icon: <Bars3Icon className="mr-3 h-4 w-4 text-black" />,
    },
  ]

  useEffect(()=>{
    getAbout(SUB_REDDIT)
  },[])

  useEffect(()=>{
    if(!news.data) return;
    setData([...data,...news.data])
  },[news])

  useEffect(() => {
    if(!sortBy) return;
    getSelectedNews(SUB_REDDIT, sortBy, null)
  }, [sortBy])

  const createPost = () => {
    window.open('https://www.reddit.com/r/aww/submit?source_id=t3_1', '_blank')
  }

  const onChangeSortBy = (sortBy) => {
    updateSortBy(sortBy)
    setSearchParams({ sortBy })
  }

  const onChangeFeedViewType = (feedViewType) => {
    updateFeedViewType(feedViewType)
    setSearchParams({ feedViewType })
  }

  const fetchAgain = () => {
    console.log("after",news.after)
    getSelectedNews(SUB_REDDIT, sortBy,news.after)
  }
  console.log("redditAfter",news.redditAfter)

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
