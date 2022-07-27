import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import * as postService from '../../services/postService'
import './PostDetails.css'

// Components
import UserCard from '../../components/UserCard/UserCard'
import DetailsTopMenu from './components/DetailsTopMenu'
import IterationHandler from './components/IterationHandler/IterationHandler'

// MUI
import Box from '@mui/material/Box'

const contentBoxStyle = {
  margin: '3rem',
  display: 'flex', flexDirection: 'column',
  justifyContent: 'center', alignItems: 'center',
}

const userBoxStyle = {
  margin: 0,
  marginLeft: '3rem',
}

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
      <Box style={userBoxStyle}>
        <UserCard author={post.author} />
      </Box>
      <Box style={contentBoxStyle}>
        <IterationHandler
          user={user}
          postId={postId}
          iterations={post.iterations}
        />
      </Box>
    </>
  )
}

export default PostDetails
