import PropTypes from 'prop-types';
import ClassicCard from '../ClassicCard/ClassicCard';
import { useEffect, useRef } from 'react';
import Card from '../Card/Card';

const InfiniteList = ({news,feedViewType,fetchAgain})=>{

  const loaderRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchAgain();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <section>
      {
        news.map((item,index)=>
          feedViewType === 'classic' ? <ClassicCard {...item.data} key={index}/> : <Card {...item.data} key={index}/> 
        )
      }
      <p className='bg-red-500 px-6 text-center block py-6' ref={loaderRef}>loading....</p>
    </section>
  )
}

InfiniteList.propTypes = {
  news: PropTypes.array,
  feedViewType: PropTypes.string,
  fetchAgain: PropTypes.func,
};

export default InfiniteList;

/* {feedViewType === 'compact' && <CompactCard {...item}/>}
              {feedViewType === 'media' && <MediaCard {...item}/>} */