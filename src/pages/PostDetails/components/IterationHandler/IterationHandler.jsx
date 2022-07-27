import { useState } from "react"

import SideNav from "./SideNav"
import VoteHandler from "./VoteHandler"
import IterationDisplay from "./IterationDisplay"

const IterationHandler = ({ postId, iterations }) => {
  const [index, setIndex] = useState(0)
  const [iterationsArr, setIterationsArr] = useState(iterations)

  const selectedIteration = iterationsArr[index]



  // const highestRated = iterations.sort((a, b) => b.rating - a.rating)

  return (
    <div style={{ display: 'flex' }}>
      <SideNav setIndex={setIndex} iterations={iterationsArr} />
      <IterationDisplay iteration={selectedIteration} />
      <VoteHandler postId={postId} iterationsArr={iterationsArr} setIterationsArr={setIterationsArr} iteration={selectedIteration} />
    </div>
  )
}

export default IterationHandler 