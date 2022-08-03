import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// MUI
import Divider from '@mui/material/Divider'
import TungstenIcon from '@mui/icons-material/Tungsten'
import { StyledBoxColCenter } from '../../styles/mui/StyledComponents'

// Components
import PostTopMenu from './components/PostTopMenu'
import PaginatedList from './components/PaginatedList'
import PostCard from '../../components/PostCard/PostCard'

// Services
import * as topicService from '../../services/topicService'

const PostList = () => {
  const { topicId } = useParams()
  const [page, setPage] = useState(0)
  const [topic, setTopic] = useState()
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('recent')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopicAndPosts = async () => {
      const data = await topicService.indexPosts(topicId, search, sort, page)
      setLoading(false)
      setTopic(data.topic)
      setPosts(data.posts)
    }
    fetchTopicAndPosts()
  }, [topicId, search, sort, page])

  const postList = posts?.map((post) => (
    post.text && <PostCard key={post._id} post={post} />
  ))

  return (
    <StyledBoxColCenter>
      <PostTopMenu topic={topic} setSort={setSort} posts={posts} setSearch={setSearch} />
      <Divider
        textAlign="left"
        sx={{
          width: '100%',
          margin: '1rem',
          color: 'primary',
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
  )
}

export default PostList