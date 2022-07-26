import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import CategoryList from '../Browse/components/CategoryList'

import * as postService from '../../services/postService'
import * as topicService from '../../services/topicService'

function NewPost(props) {
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
    'Math',
    'Science',
    'History',
    'Literature',
    'CompSci',
  ]

  // "title": "Trees",
  // "category": "Computer Science"

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
    const newTopic = await topicService.create()

    if (newTopic.msg) {
      setMsg(newTopic.msg)
    } else {
      // navigate(`/topics/${topic._id}/posts/${newPost._id}/iterations`)
    }
  }

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected)
      setTopics(data)
    }
    if (selected) fetchTopics()
  }, [selected])


  const handleClear = () => {
    setMsg('')
    setTopic()
    setSelected('')
  }

  if (msg) {
    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={() => { setMsg(''); setTopic(); setSelected('') }}>Go back</button>
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
      <button>Add A Topic</button>

      {dropdown
        ? <form onSubmit={submitTopic}>
          <h3>Topic Form</h3>
          <input name="title" value={topicForm.title} required onChange={(e) => setTopicForm({ ...topicForm, title: e.target.value })} />
          <select name="category" onChange={(e) => setTopicForm({ ...topicForm, category: e.target.value })}>
            {categories.map((category, idx) => (
              <option key={idx} value={category}>{category}</option>
            ))}
          </select>
          <button type='submit' onClick={submitTopic}>Submit</button>
          <button type='button' onClick={() => setDropdown(false)}>Cancel</button>
        </form>
        : <button onClick={() => setDropdown(true)}>Add A Topic</button>
      }

      <button disabled={!topic} onClick={handleSubmit}>Confirm</button>
    </div>
  )
}

export default NewPost