import { ArrowUpTrayIcon, ChatBubbleBottomCenterIcon, CommandLineIcon, EllipsisHorizontalIcon, PaperClipIcon, ShareIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import PopMenu from '../PopMenu/PopMenu';
import Button from '../Button/Button';
import VoteButton from '../VoteButton/VoteButton';

const ClassicCard = () =>{

  const upVote = () =>{
    console.log("upVote")
  }

  const downVote = () =>{
    console.log("downVote")
  }

  return(
    <article className='border-b pb-8'>
      <div className='flex flex-row justify-between'>
        <div className='flex items-center gap-4'>
          <img src='https://styles.redditmedia.com/t5_v12c5/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN185NjE4Mw_rare_3971626f-10f5-401f-8c5b-5ad58f7222b9-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=d7da51de6c5687fdd7d62fe6d035cf822f09daa3' alt="" className='w-8 h-8 rounded-full'/>
          <p>u/dailly</p>
          <small>12 days ago</small>
        </div>
        <div className='flex items-center gap-4'>
          <PaperClipIcon className='w-6 h-6' color='green'/>
          <PopMenu/>
        </div>
      </div>
      <h2 className='block text-lg font-bold py-4'>
        The Post-TI12 Shuffle
      </h2>
      <p className='bg-black/30 inline-block px-3 py-1 rounded-full text-xs'>
        other|esports
      </p>
      <div className='flex mt-4 gap-4'>
        <VoteButton voteCount={100} upVote={upVote} downVote={downVote}/>
        <Button text='7.1K' icon={<ChatBubbleBottomCenterIcon className='w-4 h-4'/>} className="text-black border border-gray-50 hover:border-gray-500"/>
        <Button text="Share"  icon={<ArrowUpTrayIcon className='w-4 h-4'/>} className="text-black border border-gray-50 hover:border-gray-500"/>
      </div>
    </article>
  )
}

ClassicCard.propTypes ={

}

export default ClassicCard;