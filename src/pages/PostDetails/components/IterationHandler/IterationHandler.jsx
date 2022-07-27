import { useState } from "react"

import SideNav from "./SideNav"
import VoteHandler from "./VoteHandler"
import IterationDisplay from "./IterationDisplay"

const IterationHandler = ({ iterations }) => {
  const [index, setIndex] = useState(0)
  const selectedIteration = iterations[index]

  return (
    <div style={{display: 'flex'}}>
      <SideNav index={index} setIndex={setIndex} iterations={iterations} />
      <IterationDisplay iteration={selectedIteration}/>
      <VoteHandler />
    </div>
  )
}

export default IterationHandler 