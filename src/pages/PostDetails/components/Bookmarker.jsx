import { useState } from "react"
import * as postService from '../../../services/postService'

const Bookmarker = ({ post }) => {
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked)

  const addBookmark = async () => {
    const data = await postService.bookmarkPost(post._id)
    if (data.msg === 'Success') {
      setIsBookmarked(true)
    }
  }

  const removeBookmark = async () => {
    const data = await postService.removeBookmark(post._id)
    if (data.msg === 'Success') {
      setIsBookmarked(false)
    }
  }

  return (
    <>
      {isBookmarked
        ? <button onClick={removeBookmark}>Remove Bookmark</button>
        : <button onClick={addBookmark}>Add Bookmark</button>
      }
    </>
  )
}

export default Bookmarker