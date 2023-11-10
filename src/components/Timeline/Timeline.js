import Button from '../Button/Button';
import PropTypes from 'prop-types';


const Timeline = ({
  bannerBgImage,
  communityIcon,
  communityName,
}) =>{

  const joinGroup = ()=>{
    alert('Join Group')
  }

  return(
    <div className='relative mb-20'>
      <div className="h-40 w-full bg-cover bg-no-repeat bg-center" style={{
        backgroundImage:`url(${bannerBgImage})`
      }}>
      </div>
      <div className='flex absolute -bottom-12 left-0 justify-between px-4 w-full items-end'>
        <div className="flex flex-row items-end">
          <div className='w-20 h-20 rounded-full block overflow-hidden  border-black border-2 bg-[#0168A8]'>
            <img src={communityIcon} srcSet="" sizes="" alt="r/DotA2 icon" className=" w-full h-full"></img>
          
          </div>
          <h1 className='font-bold text-4xl xs:text-xl ml-4'>
            {communityName}
          </h1>
        </div>
        <div>
          <Button text='Join' onClick={joinGroup}/>  
        </div>
      </div>
    </div>
  )
}

Timeline.propTypes = {
  bannerBgImage: PropTypes.string,
  communityIcon: PropTypes.string,
  communityName: PropTypes.string,
};

export default Timeline;