import Navbar from './components/Navbar/Navbar'
import SideMenu from './components/SideMenu/SideMenu'
import Timeline from './components/Timeline/Timeline'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {getAbout, getHot} from './redux/subreddit/action'
import { redditPageInfo,redditHot } from './redux/subreddit/selector';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ClassicCard from './components/ClassicCard/ClassicCard';

const App = ({pageInfo,hotNews, getHot,getAbout})=> {

  useEffect(() => {
    getAbout();
    getHot();
  }, []);

  console.log("INFOR",hotNews)

  return (
    <div className='px-4'>
      <Navbar/>
      <div className='grid grid-cols-4 gap-4 w-full mx-auto mt-8'>
        <section className='col-span-1 overflow-scroll h-[1200px] hidden lg:block'>
          <SideMenu/>
        </section>
        <section className='col-span-4 lg:col-span-3'>
          <Timeline bannerBgImage={pageInfo.banner_img} communityIcon={pageInfo.icon_img} communityName={pageInfo.display_name_prefixed}/>
          <section className='grid grid-cols-3 gap-4 w-full'>
            <div className='col-span-2'>

              {hotNews && hotNews.map((news,index)=>(
                <ClassicCard {...news.data} key={news.data.name}/>
              ))}
             
            </div>
            <div className='col-span-1'>section 2</div>
          </section>
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  pageInfo: redditPageInfo,
  hotNews: redditHot,
});

App.propTypes = {
  pageInfo: PropTypes.object,
  getAbout: PropTypes.func,
  getHot: PropTypes.func,
  hotNews: PropTypes.array,
};

export default connect(mapStateToProps, { getAbout , getHot})(App);