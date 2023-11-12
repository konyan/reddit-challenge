import Button from '../Button/Button'
import PropTypes from 'prop-types'

const Timeline = ({ bannerBgImage, communityIcon, communityName }) => {
  const joinGroup = () => {
    alert('Join Group')
  }

  return (
    <div className="relative mb-20">
      <div
        className="h-40 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerBgImage})`,
        }}
      ></div>
      <div className="absolute -bottom-12 left-0 flex w-full items-end justify-between px-4">
        <div className="flex flex-row items-end">
          <div className="block h-20 w-20 overflow-hidden rounded-full  border-2 border-black bg-[#0168A8]">
            <img
              src={communityIcon}
              srcSet=""
              sizes=""
              alt="r/DotA2 icon"
              className=" h-full w-full"
            ></img>
          </div>
          <h1 className="xs:text-xl ml-4 text-4xl font-bold">{communityName}</h1>
        </div>
        <div>
          <Button text="Join" onClick={joinGroup} className="bg-indigo-500 hover:bg-indigo-700 text-white" />
        </div>
      </div>
    </div>
  )
}

Timeline.propTypes = {
  bannerBgImage: PropTypes.string,
  communityIcon: PropTypes.string,
  communityName: PropTypes.string,
}

export default Timeline
