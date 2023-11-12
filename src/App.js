import Navbar from './components/Navbar/Navbar'
import SideMenu from './components/SideMenu/SideMenu'
import Timeline from './components/Timeline/Timeline'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getAbout, getHot } from './redux/subreddit/action'
import { redditPageInfo, redditHot } from './redux/subreddit/selector'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import ClassicCard from './components/ClassicCard/ClassicCard'
import Button from './components/Button/Button'
import PopMenu from './components/PopMenu/PopMenu'
import { ArrowDownIcon, Bars4Icon, ChevronDownIcon, FolderIcon } from '@heroicons/react/24/outline'

const App = ({ pageInfo, hotNews, getHot, getAbout }) => {
  const sortBy = 'hot'

  const feedViewType = 'card'

  useEffect(() => {
    getAbout()
    getHot()
  }, [])

  const createPost = () => {
    window.open('https://www.reddit.com/r/aww/submit?source_id=t3_1', '_blank')
  }

  const sortByMenus = [
    {
      text: 'Hot',
      onClick: () => {
        console.log('Hot')
      },
    },
    {
      text: 'New',
      onClick: () => {
        console.log('New')
      },
    },
    {
      text: 'Top',
      onClick: () => {
        console.log('Top')
      },
    },
    {
      text: 'Rising',
      onClick: () => {
        console.log('Rising')
      },
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
          <Timeline
            bannerBgImage={pageInfo.banner_img}
            communityIcon={pageInfo.icon_img}
            communityName={pageInfo.display_name_prefixed}
          />

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
                    text={<p className="text-xs text-black">New</p>}
                    menuItems={sortByMenus}
                  />
                  <PopMenu
                    icon={<ChevronDownIcon className="h-4 w-4" color="black" />}
                    text={<Bars4Icon className="h-4 w-4 text-black" />}
                    menuItems={[
                      {
                        text: 'Report',
                        icon: <FolderIcon className="h-4 w-4 text-black" />,
                      },
                    ]}
                  />
                </div>
              </div>

              {hotNews &&
                hotNews.map((news, index) => <ClassicCard {...news.data} key={news.data.name} />)}
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
  hotNews: redditHot,
})

App.propTypes = {
  pageInfo: PropTypes.object,
  getAbout: PropTypes.func,
  getHot: PropTypes.func,
  hotNews: PropTypes.array,
}

export default connect(mapStateToProps, { getAbout, getHot })(App)
