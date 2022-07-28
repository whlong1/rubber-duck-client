import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Post from '../Post'
import Divider from '@mui/material/Divider'
import PaginatedList from './components/PaginatedList'
import PostTopMenu from './components/PostTopMenu'

import TungstenIcon from '@mui/icons-material/Tungsten';

import * as postService from '../../../services/postService'
import * as topicService from '../../../services/topicService'
import { StyledBoxColCenter } from '../../../styles/mui/StyledComponents'

const PostList = ({ user }) => {
  const { topicId } = useParams()
  const [page, setPage] = useState(0)
  const [topic, setTopic] = useState()
  const [posts, setPosts] = useState([])
  const [sort, setSort] = useState('recent')

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.index(page, sort, topicId)
      const topicData = await topicService.show(topicId)
      setPosts(data)
      setLoading(false)
      setTopic(topicData)
    }
    fetchPosts()
  }, [topicId, sort, page])

  const [loading, setLoading] = useState(true)

  const postList = posts?.map((post) => (
    post.iterations.length > 0 && <Post post={post} key={post._id} />
  ))

  return (
    <StyledBoxColCenter>
      <PostTopMenu topic={topic} setSort={setSort} />
      <Divider 
        textAlign="left" 
        sx={{ 
          color: 'primary',
          width: '100%', 
          margin: '1rem', 
          visibility: { xs: 'hidden', md: 'visible' } 
        }}
      >
        <TungstenIcon color="primary" />
      </Divider>
      <PaginatedList 
        page={page}
        loading={loading} 
        setPage={setPage}
        postList={postList} 
        setLoading={setLoading} 
      />
    </StyledBoxColCenter>
  );
}

export default PostList;