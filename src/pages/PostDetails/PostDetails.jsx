import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import * as postService from '../../services/postService'
import './PostDetails.css'

// Components
import IterationHandler  from './components/IterationHandler/IterationHandler'
import DetailsTopMenu from './components/DetailsTopMenu'
import UserCard from '../../components/UserCard/UserCard'

const PostDetails = () => {
  const { postId } = useParams()
  const [post, setPost] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await postService.show(postId)
      setPost(postData)
    }
    fetchPosts()
  }, [postId])

  console.log('RENDER')


  if (!post) {
    return <div>Holdon, we're just getting our ducks in a row...</div>
  }

  return (
    post &&
    <>
      <DetailsTopMenu topic={post.topic} />
      <UserCard author={post.author} />
      <IterationHandler postId={postId} iterations={post.iterations} />
    </>
  )
}

export default PostDetails
