import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// MUI
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { StyledBoxFlexStart } from '../../styles/mui/StyledComponents'

// Components
import PostForm from './/components/PostForm/PostForm'
import Analysis from './components/Analysis/Analysis'

// Services
import * as topicService from '../../services/topicService'

function NewIteration() {
  const navigate = useNavigate()
  const { postId, topicId } = useParams()
  const [text, setText] = useState('')
  const [topic, setTopic] = useState()
  const [keywords, setKeywords] = useState([])
  const [iterations, setIterations] = useState(0)

  const characterLimit = 250

  function isDeleteKey(e) {
    let charCode = e.keyCode || e.which
    return charCode === 8 || charCode === 46
  }

  const handleClear = () => setText('')

  const handleCheckText = (e, text) => {
    if (text.length > characterLimit && !isDeleteKey(e)) return
    setText(text)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await topicService.createIteration(topicId, postId, { text: text })
    navigate(`/posts/${postId}`)
  }

  const handleClickSuggestion = (suggestion) => {
    if (text.length + (suggestion.length + 1) < characterLimit) {
      setText(`${text.trim()} ${suggestion}`)
    }
  }

  useEffect(() => {
    const fetchNewIterationData = async () => {
      const data = await topicService.newIteration(topicId, postId)
      setTopic(data.topic)
      setKeywords(data.keywords)
      setIterations(data.index)
    }
    fetchNewIterationData()
  }, [topicId, postId])

  return (
    <Box sx={{ padding: '1.5rem', height: 'calc(100vh - 71px)', overflow: 'hidden' }}>
      {topic
        ? <>
            <Typography variant='h5'>
              {topic.category}
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: 'abril-display' }}>
              {topic.title}
            </Typography>
          </>
        : <>
            <Skeleton height={32.02} width={100} />
            <Skeleton height={72} animation="wave" width={350} />
          </>
      }
      <Divider sx={{ marginTop: '1rem' }} />
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
          <PostForm
            text={text}
            setText={setText}
            iterations={iterations}
            handleClear={handleClear}
            handleSubmit={handleSubmit}
            characterLimit={characterLimit}
            handleCheckText={handleCheckText}
          />
        </Box>
        <Divider orientation="vertical" flexItem sx={{ marginRight: "1rem", bgcolor: "background", margin: "1rem 1rem 0 1rem" }} />
        <StyledBoxFlexStart>
          <Analysis
            text={text}
            keywords={keywords}
            handleClickSuggestion={handleClickSuggestion}
          />
        </StyledBoxFlexStart>
      </Box>
    </Box>
  )
}

export default NewIteration