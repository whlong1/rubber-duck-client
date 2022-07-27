import { useState } from "react"


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
      <p>{selectedIteration.text}</p>

      <button onClick={() => setIndex(index - 1)}>Next</button>
      <button onClick={() => setIndex(index + 1)}>Next</button>
    </div>
  )
}

export default IterationHandler 