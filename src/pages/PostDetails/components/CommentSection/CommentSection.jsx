import { useState, useEffect } from "react"

// Components
import NewComment from "./NewComment"
import CommentList from "./CommentList"

const CommentSection = ({ postId, iteration }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    setComments(iteration.comments)
  }, [iteration])

  return (
    <div>
      <NewComment
        postId={postId}
        iteration={iteration}
        comments={comments}
        setComments={setComments}
      />
      <CommentList comments={comments} />
    </div>
  )
}

export default CommentSection