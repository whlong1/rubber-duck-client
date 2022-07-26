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
  const [msg, setMsg] = useState('')

  const categories = [
    'Math',
    'Science',
    'History',
    'Literature',
    'CompSci',
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
        <button onClick={handleClear}>Go back</button>
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
      <button disabled={!topic} onClick={handleSubmit}>Confirm</button>
    </div>
  )
}

export default NewPost