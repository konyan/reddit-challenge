import { Bars2Icon, Bars3Icon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom'
import { SUB_REDDIT } from '../../utils/setting'
import { useEffect, useState } from 'react'


const useSubReddit = ({
  news,
  getSelectedNews,
  sortBy,
  updateSortBy,
  getAbout,
  feedViewType,
  updateFeedViewType
}) => {

  // eslint-disable-next-line no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams()
  const [data , setData] = useState([])


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


  const createPost = () => {
    window.open('https://www.reddit.com/r/aww/submit?source_id=t3_1', '_blank')
  }

  

  return {
    sortByMenus,
    feedViewTypeMenus,
    fetchAgain,
    createPost,
    data
  }
}


useSubReddit.propTypes = {
  pageInfo: PropTypes.object,
  getAbout: PropTypes.func,
  getSelectedNews: PropTypes.func,
  news: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  feedViewType: PropTypes.string.isRequired,
  updateSortBy: PropTypes.func.isRequired,
  updateFeedViewType: PropTypes.func.isRequired,
}


export default useSubReddit;