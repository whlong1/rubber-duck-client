import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import FunctionsIcon from '@mui/icons-material/Functions';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddIcon from '@mui/icons-material/Add'
import PublicIcon from '@mui/icons-material/Public';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import NewPostForm from './components/NewPostForm';
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { StyledCard, StyledBox } from '../Browse/components/mui/StyledComponents'
import CardActionArea from '@mui/material/CardActionArea'

// Components
import CategoryList from '../Browse/components/CategoryList'

import * as postService from '../../services/postService'
import * as topicService from '../../services/topicService'

function NewPost() {
  const navigate = useNavigate()
  const [topics, setTopics] = useState([])
  const [topic, setTopic] = useState()
  const [selected, setSelected] = useState()
  const [dropdown, setDropdown] = useState(false)
  const [msg, setMsg] = useState('')

  const [topicForm, setTopicForm] = useState({
    title: '',
    category: 'Math'
  })

  const categories = [
    {name: 'Math', color:'#F75847', icon: <FunctionsIcon />},
    {name: 'Science', color:'#00B1C6', icon: <ScienceIcon />},
    {name: 'History', color:'#7E7568', icon: <PublicIcon />},
    {name: 'Literature', color:'#0CBA6E', icon: <AutoStoriesIcon />},
    {name: 'CompSci', color:'#FFB201', icon: <CodeIcon />},
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = await postService.create({ topic: topic._id })
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
      setSelected()
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
      <Typography variant='h3' sx={{ fontFamily: "abril-display" }}>PICK CATEGORY</Typography>
      <CategoryList
        categories={categories}
        setSelected={setSelected}
      />
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
      {dropdown
        ? <NewPostForm 
            topicForm={topicForm} 
            submitTopic={submitTopic} 
            setTopicForm={setTopicForm} 
            categories={categories}
            setDropdown={setDropdown} 
            selected={selected} 
          />
        : 
          <Fab 
            variant="extended" 
            color='success'
            sx={{ backgroundColor: selected?.color, color: 'white' }}
            onClick={() => setDropdown(true)}
          >
            <AddIcon sx={{ mr: 1 }} />
            Add A Topic
          </Fab>
      }
    </Box>
  )
}

export default NewPost