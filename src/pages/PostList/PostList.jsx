import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Divider from '@mui/material/Divider'
import TungstenIcon from '@mui/icons-material/Tungsten'
import { StyledBoxColCenter } from '../../styles/mui/StyledComponents'

// Components
import PostTopMenu from './components/PostTopMenu'
import PaginatedList from './components/PaginatedList'
import PostCard from '../../components/PostCard/PostCard'

// Services
import * as postService from '../../services/postService'
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
    const fetchPosts = async () => {
      // const data = await postService.index(page, sort, topicId)
      // const topicData = await topicService.show(topicId)
      // (topicId, search, sort, page)
      const topicData = await topicService.findTopicAndPosts(topicId, search, sort, page)
      console.log(topicData)

      // setPosts(data)
      // setLoading(false)
      // setTopic(topicData)
    }
    fetchPosts()
  }, [topicId, sort, page])

  const postList = posts?.map((post) => (
    !!post.iterations.length && <PostCard post={post} key={post._id} />
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
  )
}

export default PostList