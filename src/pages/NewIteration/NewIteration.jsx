import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'

// Components
import PostForm from './/components/PostForm/PostForm'
import Analysis from './components/Analysis/Analysis'
import * as postService from '../../services/postService'


function NewIteration(props) {
  const navigate = useNavigate()
  const { postId, topicId } = useParams()
  const [topic, setTopic] = useState()
  const [text, setText] = useState('')
  const [keywords, setKeywords] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postService.createIteration(postId, { text: text })
    navigate(`/posts/${postId}`)
  }

  useEffect(() => {
    const fetchKeyWords = async () => {
      const data = await postService.findKeywords(topicId, postId)
      setTopic(data.topic)
      setKeywords(data.keywords)
    }
    fetchKeyWords()
  }, [topicId, postId])

  return (
    <Box sx={{ width: '100%' }}>
      <h3>{topic?.category}</h3>
      <h1>{topic?.title}</h1>
      <PostForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <Analysis text={text} keywords={keywords} />
    </Box>
  )
}

export default NewIteration