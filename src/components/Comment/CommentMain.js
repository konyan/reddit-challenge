/* eslint-disable react/prop-types */
import {
  ArrowUturnRightIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline'
import moment from 'moment'
import React from 'react'
import Button from '../Button/Button'
import TextEditor from './Editor'
import { formatNumber } from '../../utils/setting'
import parse from 'html-react-parser'

// eslint-disable-next-line react/prop-types
const CommentMain = ({ post }) => {

  const voteCount = post?.data?.ups - post?.data?.downs

  

  return (
    <>
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-3">
          <div className="cursor-pointer rounded-md p-1 hover:bg-gray-200/50">
            <HandThumbUpIcon className="h-3 w-3" />
          </div>
          <p className="text-xs"> {formatNumber(voteCount)} </p>

          <div className="cursor-pointer rounded-md p-1 hover:bg-gray-200/50">
            <HandThumbDownIcon className="h-3 w-3" />
          </div>
        </div>
        <div>
          <div>
            <p className="mb-3 flex gap-2 text-xs">
              <p>Posted By {post?.data?.author}</p>
              <span className="text-gray-500/50">{moment.unix(post.data.created).fromNow()}</span>
            </p>
            <p className="text-xl">{post?.data?.title}</p>

            <a href={post?.data?.url_overridden_by_dest} className="text-xs text-sky-600">
              {post?.data?.url_overridden_by_dest}
            </a>
          </div>
          <div dangerouslySetInnerHTML={{
            __html: parse(decodeURIComponent(post?.data?.selftext_html))
          }} className="mt-5 text-sm leading-6"
          /> 


          <div className="mt-5 flex justify-between gap-3">
            <div className="flex gap-3">
              <div className="flex cursor-pointer items-center gap-1">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                139
                <p>Comments</p>
              </div>
              <div className="flex cursor-pointer items-center gap-1">
                <ArrowUturnRightIcon className="h-4 w-4" />

                <p>share</p>
              </div>
              <div className="flex cursor-pointer items-center gap-1">
                <BookmarkIcon className="h-4 w-4" />

                <p>Save</p>
              </div>
            </div>
            <div className="flex cursor-pointer items-center gap-1 text-xs">
              {post.data.pwls}

              <p>people</p>
            </div>
          </div>
          <div className="mb-5 mt-5 border-b pb-5">
            <p className="text-xs">comment as </p>
            <TextEditor />

            <div className="mt-2 flex gap-2">
              <Button
                text="Comment"
                // onClick={onAddComment}
                className="rounded-lg border hover:bg-gray-200"
              ></Button>
              <Button
                // onClick={() => {
                //   setShowInput(false)
                //   if (!comment?.items?.length) setExpand(false)
                // }}
                text="CANCEL"
                className="rounded-lg border hover:bg-gray-200"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentMain
