/* eslint-disable react/prop-types */
import { ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'
import { HandThumbDownIcon, HandThumbUpIcon, PencilIcon } from '@heroicons/react/24/outline'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import TextEditor from './Editor'

const Action = ({ handleClick, type, className }) => {
  return (
    <div className={className} onClick={handleClick}>
      {type}
    </div>
  )
}

const Comment = ({ handleInsertNode, handleEditNode, handleDeleteNode, comment }) => {
  const [input, setInput] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [expand, setExpand] = useState(false)
  const inputRef = useRef(null)

  const [areChildrenHidden, setAreChildrenHidden] = useState(false)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [editMode])

  const handleNewComment = () => {
    setExpand(!expand)
    setShowInput(true)
  }

  const onAddComment = () => {
    if (editMode) {
      // handleEditNode(comment.id, inputRef?.current?.innerText)
    } else {
      // setExpand(true)
      // handleInsertNode(comment.id, input)
      // setShowInput(false)
      // setInput('')
    }

    if (editMode) setEditMode(false)
  }

  const handleDelete = () => {
    handleDeleteNode(comment.id)
  }

  return (
    <div>
      <div className={comment.id === 1 ? 'inputContainer w-full' : ' flex pt-3'}>
        {comment.kind === 't3' ? (
          <>
            <div className="flex w-full flex-col">
              <TextEditor
                autoFocus
                onChange={(e) => setInput(e.target.value)}
                placeholder="type..."
              />

              <Action className="reply comment" type="COMMENT" handleClick={onAddComment} />
            </div>
          </>
        ) : (
          <div className="flex  items-start gap-2">
            <div className="relative h-full">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              {comment?.data?.replies?.data && <div className="collapse-line-2 h-full"></div>}
            </div>
            <div className="">
              <p className="mb-3 text-xs">
                {comment?.data?.author}.{' '}
                <span className="text-gray-500/50">
                  {moment.unix(comment.data.created).fromNow()}
                </span>
              </p>
              <span
                contentEditable={editMode}
                suppressContentEditableWarning={editMode}
                ref={inputRef}
                className="mt-5"
                style={{ wordWrap: 'break-word' }}
              >
                {comment?.data?.body}
              </span>

              <div className="flex items-center gap-5">
                {editMode ? (
                  <div className="flex gap-5">
                    <div>
                      <Action className="reply" type="SAVE" handleClick={onAddComment} />
                    </div>
                    <div>
                      <Action
                        className="reply"
                        type="CANCEL"
                        handleClick={() => {
                          if (inputRef.current) inputRef.current.innerText = comment.name
                          setEditMode(false)
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="cursor-pointer rounded-md p-1 hover:bg-gray-200/50">
                        <HandThumbUpIcon className="h-3 w-3" />
                      </div>
                      {comment?.data?.score}{' '}
                      <div className="cursor-pointer rounded-md p-1 hover:bg-gray-200/50">
                        <HandThumbDownIcon className="h-3 w-3" />
                      </div>
                    </div>

                    <div
                      onClick={handleNewComment}
                      className="flex cursor-pointer items-center gap-1"
                    >
                      <ChatBubbleLeftRightIcon className="h-4 w-4" />
                      <p>Reply</p>
                    </div>
                    <Action
                      className="reply"
                      type={<PencilIcon className="h-4 w-4" />}
                      handleClick={() => {
                        setEditMode(true)
                      }}
                    />
                    <Action
                      className="reply"
                      type={'Share'}
                      handleClick={() => {
                        alert('share')
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'block', paddingLeft: 19 }}>
        {showInput && (
          <div className={`nested-comments-stack ${areChildrenHidden ? '' : ''} h-full`}>
            <button
              className="collapse-line"
              aria-label="Hide Replies"
              onClick={() => setAreChildrenHidden(true)}
            />
            <div className="my-2 ml-5 border-l py-5 pl-[25px]">
              <div className="h-auto">
                <TextEditor onChange={(e) => setInput(e.target.value)} />
              </div>
              <div className="mt-2 flex gap-2">
                <Button
                  text="Reply"
                  onClick={onAddComment}
                  className="rounded-lg border hover:bg-gray-200"
                ></Button>
                <Button
                  onClick={() => {
                    setShowInput(false)
                    if (!comment?.items?.length) setExpand(false)
                  }}
                  text="CANCEL"
                  className="rounded-lg border hover:bg-gray-200"
                ></Button>
              </div>
            </div>
          </div>
        )}

        {comment?.data?.replies?.data?.children?.map((cmnt, idx) => {
          return (
            <div key={idx}>
              <div className={`nested-comments-stack ${areChildrenHidden ? '' : ''}`}>
                <button
                  className="collapse-line"
                  aria-label="Hide Replies"
                  onClick={() => setAreChildrenHidden(true)}
                />
                <div className="nested-comments">
                  <Comment
                    key={idx}
                    handleInsertNode={handleInsertNode}
                    handleEditNode={handleEditNode}
                    handleDeleteNode={handleDeleteNode}
                    comment={cmnt}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comment
