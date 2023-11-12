import { ArrowSmallDownIcon, ArrowSmallUpIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

const VoteButton = ({ voteCount, upVote, downVote }) => {
  return (
    <div
      type="button"
      className="inline-flex items-center gap-x-1.5 rounded-full border border-gray-50 px-2.5 py-1.5 text-sm font-semibold text-black shadow-sm hover:border-gray-500"
    >
      <button
        type="button"
        onClick={upVote}
        className="rounded-full  p-1 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ArrowSmallUpIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      </button>
      {voteCount}

      <button
        type="button"
        className="rounded-full  p-1 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ArrowSmallDownIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}

VoteButton.propTypes = {
  voteCount: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
}

export default VoteButton
