import Navbar from './components/Navbar/Navbar'
import SideMenu from './components/SideMenu/SideMenu'
import Timeline from './components/Timeline/Timeline'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getAbout, getSelectedNews,updateSortBy } from './redux/subreddit/action'
import { redditPageInfo, redditNews,redditSortBy,redditFeedViewType } from './redux/subreddit/selector'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import ClassicCard from './components/ClassicCard/ClassicCard'
import Button from './components/Button/Button'
import PopMenu from './components/PopMenu/PopMenu'
import {
  ArrowDownIcon,
  Bars2Icon,
  Bars3Icon,
  Bars4Icon,
  ChevronDownIcon,
  FolderIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline'
import { useSearchParams } from "react-router-dom";

const App = ({ pageInfo, news, getSelectedNews, getAbout,sortBy,feedViewType,updateSortBy }) => {

  let [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {

    if(!searchParams.get('page')){
      getSelectedNews('dota2', sortBy)
    }else{
      getSelectedNews('dota2', sortBy, searchParams.get('page'),news.after)
    }

  }, [searchParams,sortBy])
  console.log("RO", searchParams.get('page'),news,sortBy);

    
  const createPost = () => {
    window.open('https://www.reddit.com/r/aww/submit?source_id=t3_1', '_blank')
  }

  const onChangeSortBy = (sortBy) => {
    updateSortBy(sortBy)
    setSearchParams({ sortBy });
  }

  const sortByMenus = [
    {
      text: 'Hot',
      onClick: () =>onChangeSortBy('hot'),
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
      onClick: () => {
        console.log('Card')
      },
      active: true,
      icon: <Bars2Icon className="mr-3 h-4 w-4 text-black" />,
    },
    {
      text: 'Classic',
      onClick: () => {
        console.log('Classic')
      },
      active: false,
      icon: <Bars3Icon className="mr-3 h-4 w-4 text-black" />,
    },
  ]

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
          {pageInfo &&   <Timeline
            bannerBgImage={pageInfo.banner_img}
            communityIcon={pageInfo.icon_img}
            communityName={pageInfo.display_name_prefixed}
          />}

          <section className="grid w-full grid-cols-3 gap-4">
            <div className="col-span-2">
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
                    text={<p className="text-xs text-black uppercase">{sortBy}</p>}
                    menuItems={sortByMenus}
                  />
                  <PopMenu
                    icon={<ChevronDownIcon className="h-4 w-4" color="black" />}
                    text={<Bars4Icon className="h-4 w-4 text-black" />}
                    menuItems={feedViewTypeMenus}
                  />
                </div>
              </div>

              {news.data &&
                news.data.map((news, index) => <ClassicCard {...news.data} key={news.data.name} />)}
            </div>
            <div className="col-span-1">section 2</div>
          </section>
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  pageInfo: redditPageInfo,
  news: redditNews,
  sortBy:redditSortBy,
  feedViewType:redditFeedViewType
})

App.propTypes = {
  pageInfo: PropTypes.object,
  getAbout: PropTypes.func,
  getSelectedNews: PropTypes.func,
  news: PropTypes.array,
  sortBy:PropTypes.string.isRequired,
  feedViewType:PropTypes.string.isRequired,
  updateSortBy:PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getAbout, getSelectedNews ,updateSortBy})(App)
