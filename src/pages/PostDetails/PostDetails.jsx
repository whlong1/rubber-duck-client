import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import * as postService from '../../services/postService'
import './PostDetails.css'

// Components
import UserCard from '../../components/UserCard/UserCard'
import DetailsTopMenu from './components/DetailsTopMenu'
import IterationHandler from './components/IterationHandler/IterationHandler'

const PostDetails = ({ user }) => {
  const { postId } = useParams()
  const [post, setPost] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await postService.show(postId)
      setPost(postData)
    }
    fetchPosts()
  }, [postId])

  if (!post) {
    return <div>Holdon, we're just getting our ducks in a row...</div>
  }

  return (
    post &&
    <>
      <DetailsTopMenu topic={post.topic} />
      <UserCard author={post.author} />
      <IterationHandler user={user} postId={postId} iterations={post.iterations} />
    </>
  )
}

export default PostDetails
