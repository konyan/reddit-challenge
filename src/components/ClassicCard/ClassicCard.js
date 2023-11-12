import {
  ArrowUpTrayIcon,
  ChatBubbleBottomCenterIcon,
  EllipsisHorizontalIcon,
  FlagIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import PopMenu from '../PopMenu/PopMenu'
import Button from '../Button/Button'
import VoteButton from '../VoteButton/VoteButton'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ClassicCard = ({
  downs,
  num_comments: commentCount,
  link_flair_richtext: linkFlair,
  ups,
  author,
  created_utc:createdAt,
  title,
  id,
  permalink,
}) => {
  const voteCount = ups - downs

  const linkName = permalink.split('/')[permalink.split('/').length - 2]

  const navigate = useNavigate();

  const upVote = () => {
    console.log('upVote')
  }

  const downVote = () => {
    console.log('downVote')
  }

  const goThread = () =>{
    navigate(`/thread/${id}/${linkName}`)
  }

  return (
    <article className="border-b pb-6 pt-4 hover:bg-gray-300 rounded-lg cursor-pointer px-4" onClick={goThread}>
      <div className="flex flex-row justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://styles.redditmedia.com/t5_v12c5/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN185NjE4Mw_rare_3971626f-10f5-401f-8c5b-5ad58f7222b9-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=d7da51de6c5687fdd7d62fe6d035cf822f09daa3"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <p>u/{author}</p>
          <small> {moment.unix(createdAt).fromNow()}</small>
        </div>
        <div className="flex items-center gap-4">
          <PaperClipIcon className="h-6 w-6" color="green" />
          <PopMenu
            icon={<EllipsisHorizontalIcon className="h-6 w-6" aria-hidden="true" color="black" />}
            menuItems={[
              {
                text: 'Report',
                icon: <FlagIcon className="mr-4 h-4 w-4 text-black" />,
              },
            ]}
          />
        </div>
      </div>
      <h2 className="block py-4 text-lg font-bold">{title}</h2>
      <p className="inline-block rounded-full bg-black/30 px-3 py-1 text-xs">{linkFlair[0].t}</p>
      <div className="mt-4 flex gap-4">
        <VoteButton voteCount={voteCount} upVote={upVote} downVote={downVote} />
        <Button
          text={commentCount.toString()}
          icon={<ChatBubbleBottomCenterIcon className="h-4 w-4" />}
          className="border border-gray-50 text-black hover:border-gray-500"
        />
        <Button
          text="Share"
          icon={<ArrowUpTrayIcon className="h-4 w-4" />}
          className="border border-gray-50 text-black hover:border-gray-500"
        />
      </div>
    </article>
  )
}

ClassicCard.propTypes = {
  downs: PropTypes.number.isRequired,
  num_comments: PropTypes.number,
  link_flair_richtext: PropTypes.array,
  ups: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  created_utc: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
}

export default ClassicCard
