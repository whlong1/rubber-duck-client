import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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

  function isDeleteKey(e){
    let charCode = e.keyCode || e.which
    return charCode === 8 || charCode === 46
  }
  const characterLimit = 200

  const handleCheckText = (e, text) => {
    if(text.length > characterLimit && !isDeleteKey(e)) return
    setText(text)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postService.createIteration(postId, { text: text })
    navigate(`/posts/${postId}`)
  }

  const handleClickSuggestion = (suggestion) => {
    if(text.length + (suggestion.length + 1) < characterLimit){
      setText(`${text.trim()} ${suggestion}`)
    }
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
    <Box sx={{ padding: '1rem' }}>
      <Typography 
        variant='h5'
      >
        {topic?.category}
      </Typography>
      <Typography variant="h2" sx={{ fontFamily: 'abril-display'}}>
        {topic?.title}
      </Typography>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', height: '298px', marginTop: '5rem' }}>
        <PostForm 
          text={text} 
          setText={setText} 
          handleSubmit={handleSubmit}
          characterLimit={characterLimit}
          handleCheckText={handleCheckText}
        />
        <Analysis text={text} keywords={keywords} handleClickSuggestion={handleClickSuggestion} />
      </Box>
    </Box>
  )
}

export default NewIteration