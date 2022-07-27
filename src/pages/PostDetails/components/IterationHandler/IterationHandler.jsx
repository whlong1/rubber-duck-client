import { useState } from "react"

import SideNav from "./SideNav"
import VoteHandler from "./VoteHandler"

const IterationHandler = ({ iterations }) => {
  const [index, setIndex] = useState(0)
  const selectedIteration = iterations[index]

  {/* {iterations.map((iteration) =>
        <div key={iteration._id}>
          <ul>{iteration.text}</ul>
          <ul>{iteration.createdAt.slice(0, 10)}</ul>
        </div>
      )} */}



  return (
    <div>
      <SideNav index={index} iterations={iterations} />
      <p>{selectedIteration.text}</p>
      <VoteHandler />
    </div>
  )
}

export default IterationHandler 