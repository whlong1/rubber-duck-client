import { useState, useEffect } from 'react'
import Post from '../Post'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import PaginatedList from './components/PaginatedList'
import PostTopMenu from './components/PostTopMenu'

import TungstenIcon from '@mui/icons-material/Tungsten';

import { seedData } from '../../../assets/seedData/seedData'

const PostList = ({ user }) => {
  const [loading, setLoading] = useState(true)
  const [postTitles, setPostTitles] = useState([])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  useEffect(() => {
    setPostTitles(seedData.map(post => post.post))
  }, [seedData])

  const seedPosts = seedData.map((post, uuid) => (
    <Post key={uuid} post={post} />
  ))

  return ( 
    <Box style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: '3rem'
    }}>
      <PostTopMenu postTitles={postTitles} />
      <Divider textAlign="left" sx={{ color: 'primary', width: '90%' }}><TungstenIcon color="primary" /></Divider>
      <PaginatedList loading={loading} setLoading={setLoading} seedPosts={seedPosts} />
    </Box>
   );
}
 
export default PostList;