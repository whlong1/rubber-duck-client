import { useState, useEffect } from "react"

import NewComment from "./NewComment"
import CommentList from "./CommentList"

const CommentSection = ({ iteration }) => {
  const [comments, setComments] = useState([])
  console.log(iteration)

  useEffect(() => {
    setComments(iteration.comments)
  }, [iteration])

  return (
    <div>
      <NewComment comments={comments} setComments={setComments} />
      <CommentList comments={comments} />
    </div>
  )
}

export default CommentSection