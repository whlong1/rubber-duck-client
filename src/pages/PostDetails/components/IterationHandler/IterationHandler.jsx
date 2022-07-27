import { useState } from "react"

import SideNav from "./SideNav"
import VoteHandler from "./VoteHandler"
import IterationDisplay from "./IterationDisplay"

const IterationHandler = ({ postId, iterations }) => {
  const [index, setIndex] = useState(0)
  const selectedIteration = iterations[index]

  return (
    <div style={{ display: 'flex' }}>
      <SideNav setIndex={setIndex} iterations={iterations} />
      <IterationDisplay iteration={selectedIteration} />
      <VoteHandler postId={postId} iteration={selectedIteration} />
    </div>
  )
}

export default IterationHandler 