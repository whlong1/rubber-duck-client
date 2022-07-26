import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Post from '../Post'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import PaginatedList from './components/PaginatedList'
import PostTopMenu from './components/PostTopMenu'

import TungstenIcon from '@mui/icons-material/Tungsten';

import * as postService from '../../../services/postService'


const PostList = ({ user }) => {
  const { topicId } = useParams()
  const [page, setPage] = useState(0)
  const [sort, setSort] = useState('recent') // sort values: 'recent' or 'popular'
  const [selectedTopic, setSelectedTopic] = useState(topicId) // <<<< use for search

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.index(page, sort, selectedTopic)
      setPosts(data)
      setLoading(false)
    }
    return () => fetchPosts()
  }, [selectedTopic])
  console.log('POSTS STATE::::', posts)

  // =======================

  const [loading, setLoading] = useState(true)
  const [postTitles, setPostTitles] = useState([])

  const postList = posts?.map((post) => (
    <Post key={post._id} post={post} />
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
      <Divider textAlign="left" sx={{ color: 'primary', width: '100%', marginBottom: '1rem' }}><TungstenIcon color="primary" /></Divider>
      <PaginatedList loading={loading} setLoading={setLoading} postList={postList} />
    </Box>
  );
}

export default PostList;