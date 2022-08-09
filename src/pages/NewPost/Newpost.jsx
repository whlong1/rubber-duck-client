import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import AddIcon from '@mui/icons-material/Add'
import CodeIcon from '@mui/icons-material/Code'
import Typography from '@mui/material/Typography'
import PublicIcon from '@mui/icons-material/Public'
import ScienceIcon from '@mui/icons-material/Science'
import CardActionArea from '@mui/material/CardActionArea'
import FunctionsIcon from '@mui/icons-material/Functions'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { StyledCard, StyledBox } from '../Browse/components/mui/StyledComponents'

// Components
import NewTopicForm from './components/NewTopicForm'
import CategoryList from '../Browse/components/CategoryList'

// Services
import * as topicService from '../../services/topicService'

function NewPost() {
  const navigate = useNavigate()
  const [msg, setMsg] = useState('')
  const [topic, setTopic] = useState()
  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState()
  const [dropdown, setDropdown] = useState(false)
  const [topicForm, setTopicForm] = useState({
    title: '',
    category: 'Math'
  })

  useEffect(() => {
    setTopicForm((obj) => (
      { ...obj, category: selected?.name || 'Math' }
    ))
  }, [selected])

  const categories = [
    { name: 'Math', color: '#F75847', icon: <FunctionsIcon /> },
    { name: 'Science', color: '#00B1C6', icon: <ScienceIcon /> },
    { name: 'History', color: '#7E7568', icon: <PublicIcon /> },
    { name: 'Literature', color: '#0CBA6E', icon: <AutoStoriesIcon /> },
    { name: 'CompSci', color: '#FFB201', icon: <CodeIcon /> },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = await topicService.createPost(topic._id)
    if (newPost.msg) {
      setMsg(newPost.msg)
    } else {
      navigate(`/topics/${topic._id}/posts/${newPost._id}/iterations`)
    }
  }

  const submitTopic = async (e) => {
    e.preventDefault()
    const newTopic = await topicService.create(topicForm)
    if (newTopic.msg) {
      setMsg(newTopic.msg)
    } else {
      setSelected({ ...selected })
      setTopics([])
      setTopicForm({ title: '', category: 'Math' })
      setDropdown(false)
    }
  }

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected.name)
      setTopics(data)
    }
    if (selected) fetchTopics()
  }, [selected])

  if (msg) {
    return (
      <div>
        <h1>{msg}</h1>
        <Button onClick={() => { setMsg(''); setTopic(); setSelected(); setTopicForm({ title: '', category: 'Math' }) }}>Go back</Button>
      </div>
    )
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant='h3' sx={{ fontFamily: "abril-display" }}>
            Select Category
          </Typography>
          <CategoryList
            categories={categories}
            setSelected={setSelected}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '1rem' }} >
          {dropdown
            ? <NewTopicForm
              topicForm={topicForm}
              submitTopic={submitTopic}
              setTopicForm={setTopicForm}
              categories={categories}
              setDropdown={setDropdown}
              selected={selected}
            />
            : <Fab
              color='success'
              variant="extended"
              onClick={() => setDropdown(true)}
              sx={{ backgroundColor: selected?.color, color: 'white' }}
            >
              <AddIcon sx={{ mr: 1 }} />Add A Topic
            </Fab>
          }
        </Box>
      </Box>
      <Divider />
      <h3>PICK A TOPIC TO WRITE ABOUT</h3>
      <StyledBox>
        {topics?.map((topic) => (
          <StyledCard key={topic._id}>
            <CardActionArea
              onClick={() => setTopic(topic)}
              sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}
            >
              {topic.title}
            </CardActionArea>
          </StyledCard>
        ))}
      </StyledBox>
      <Button disabled={!topic} onClick={handleSubmit}>Confirm</Button>
    </Box>
  )
}

export default NewPost