import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import FunctionsIcon from '@mui/icons-material/Functions';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';

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
        <button onClick={() => { setMsg(''); setTopic(); setSelected(); setTopicForm({ title: '', category: 'Math' }) }}>Go back</button>
      </div>
    )
  }

  return (
    <div>
      <h1>PICK CATEGORY</h1>
      <CategoryList
        categories={categories}
        setSelected={setSelected}
      />
      <h3>PICK A TOPIC TO WRITE ABOUT</h3>
      {topics?.map((topic) => (
        <button onClick={() => setTopic(topic)} key={topic._id}>
          {topic.title}
        </button>
      ))}
      {dropdown
        ? <form onSubmit={submitTopic}>
            <h3>Enter your new topic</h3>
            <input placeholder='Title' name="title" value={topicForm.title} onChange={(e) => setTopicForm({ ...topicForm, title: e.target.value })} />
            <select name="category" onChange={(e) => setTopicForm({ ...topicForm, category: e.target.value })}>
              {categories.map((category, idx) => (
                <option key={idx} value={category.name}>{category.name}</option>
              ))}
            </select>
            <button disabled={!topicForm.title} type='submit' onClick={submitTopic}>Submit</button>
            <button type='button' onClick={() => setDropdown(false)}>Cancel</button>
          </form>
        : <button onClick={() => setDropdown(true)}>Add A Topic</button>
      }

      <button disabled={!topic} onClick={handleSubmit}>Confirm</button>
    </div>
  )
}

export default NewPost