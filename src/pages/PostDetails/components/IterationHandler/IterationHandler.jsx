import { useState } from "react"

import SideNav from "./SideNav"
import VoteHandler from "./VoteHandler"
import IterationDisplay from "./IterationDisplay"
import CommentSection from '../CommentSection/CommentSection'

const IterationHandler = ({ user, postId, iterations }) => {
  const [index, setIndex] = useState(0)
  const [iterationsArr, setIterationsArr] = useState(iterations)
  const selectedIteration = iterationsArr[index]
  return (
    <div style={{ display: 'flex' }}>
      <SideNav index={index} setIndex={setIndex} iterations={iterationsArr} />
      <IterationDisplay iteration={selectedIteration} />
      <CommentSection iteration={selectedIteration} />
      <VoteHandler
        user={user}
        postId={postId}
        iterationsArr={iterationsArr}
        iteration={selectedIteration}
        setIterationsArr={setIterationsArr}
      />
    </div>
  )
}

export default IterationHandler 