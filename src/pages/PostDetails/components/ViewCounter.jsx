import { useState, useEffect } from 'react'
import * as postService from '../../../services/postService'

const ViewCounter = ({ post }) => {
  const [views, setViews] = useState(post.views)

  useEffect(() => {
    const incrementViews = async () => {
      const res = await postService.incrementViews(post._id)
      res.success && setViews(views + 1)
    }

    const timer = setTimeout(() => {
      incrementViews()
    }, 3000)
    return () => clearTimeout(timer)
  }, [post._id])

  return (
    <>
      View Counter:
      {views}
    </>
  )
}

export default ViewCounter