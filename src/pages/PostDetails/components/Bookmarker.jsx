import { useState } from "react"
import * as postService from '../../../services/postService'


const Bookmarker = ({ post }) => {
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked)

  const handleBookmark = async () => {
    const data = await postService.bookmarkPost()
  }

  return (
    <>
      {isBookmarked ? 'Remove' : 'Bookmark'}
    </>
  )
}

export default Bookmarker