import PropTypes from 'prop-types';
import ClassicCard from '../ClassicCard/ClassicCard';

const InfiniteList = ({news,feedViewType})=>{
  return (
    <section>
      {
        news.map((item)=>
          feedViewType === 'classic' && <ClassicCard {...item.data} key={item.data.name}/>
        )
      }
    </section>
  )
}

InfiniteList.propTypes = {
  news: PropTypes.array,
  feedViewType: PropTypes.string,
};

export default InfiniteList;

/* {feedViewType === 'compact' && <CompactCard {...item}/>}
              {feedViewType === 'media' && <MediaCard {...item}/>} */