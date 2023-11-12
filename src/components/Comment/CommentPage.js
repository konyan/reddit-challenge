/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import useNode from '../../hooks/useNode'
import Comment from './Comment'
import CommentMain from './CommentMain'
// import './styles.css'

const CommentPage = ({ commentList }) => {
  const [commentsData, setCommentsData] = useState(commentList)
  console.log(commentList)

  const { insertNode, editNode, deleteNode } = useNode()

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item)
    setCommentsData(finalStructure)
  }

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value)
    setCommentsData(finalStructure)
  }

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId)
    const temp = { ...finalStructure }
    setCommentsData(temp)
  }

  useEffect(() => {
    setCommentsData(commentList)
  }, [])

  return (
    <div className="flex flex-col gap-5 rounded-lg p-5 shadow">
      <div className="">
        {commentList?.[0]?.data?.children.map((item, idx) => {
          return <CommentMain key={idx} post={item} />
        })}
      </div>

      {commentList?.[1]?.data?.children.map((item, idx) => {
        return (
          <Comment
            key={idx}
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            comment={item}
          />
        )
      })}
    </div>
  )
}

export default CommentPage
