import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import * as postService from '../../services/postService'


import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

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

  const handleVote = async (vote) => {
    await postService.castVote(postId, post.iterations[0]._id, vote)
  }

  console.log(post)

  if (!post) {
    return <div>Holdon, we're just getting our ducks in a row...</div>
  }


  return (
    post &&
    <>
      <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '3rem' }}>
        <DetailsTopMenu topic={post.topic} />
        <Divider textAlign="left" sx={{ color: 'primary', width: '100%', margin: '1rem', visibility: { xs: 'hidden', md: 'visible' } }}></Divider>
      </Box>

      <UserCard author={post.author} />

      {post.iterations?.map((iteration) =>
        <div key={iteration._id}>
          <ul>{iteration.text}</ul>
          <ul>{iteration.createdAt}</ul>
        </div>
      )}

      <button onClick={() => handleVote(1)}>UpVote</button>
      <button onClick={() => handleVote(-1)}>DownVote</button>
    </>
  )
}

export default PostDetails
