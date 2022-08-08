import { useState } from "react"
import * as postService from '../../../../services/postService'

const NewComment = ({ postId, iteration, comments, setComments }) => {
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = await postService.createComment(postId, iteration._id, { text: text })
    setText('')
    setComments([...comments, newComment])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewComment