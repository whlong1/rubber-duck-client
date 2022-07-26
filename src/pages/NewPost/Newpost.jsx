import { useState, useEffect } from 'react'

// Components
import CategoryList from '../Browse/components/CategoryList'

import * as postService from '../../services/postService'

import * as topicService from '../../services/topicService'

function NewPost(props) {

  const [topics, setTopics] = useState([])
  const [topicId, setTopicId] = useState('')
  const [selected, setSelected] = useState()
  const [msg, setMsg] = useState('')

  const categories = [
    'Math',
    'Science',
    'History',
    'Literature',
    'Computer Science',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await postService.create({ topic: topicId })
    console.log(data)
    if (data.msg) {
      setMsg(data.msg)
    } else {

    }
  }

  //  author: "62e0260e1afec70fd4066e0a"
  // createdAt: "2022-07-26T19:18:56.062Z"
  // iterations: []
  // topic: "62e026321afec70fd4066e16"
  // updatedAt: "2022-07-26T19:18:56.062Z"
  // viewers: []
  // views: 0
  // __v: 0
  // _id: "62e03e20166d3c442f7bbaac"

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected)
      setTopics(data)
    }
    if (selected) fetchTopics()
  }, [selected])


  const handleClear = () => {
    setMsg('')
    setTopicId('')
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
        <button onClick={() => setTopicId(topic._id)} key={topic._id} to={`/topics/${topic._id}`}>
          {topic.title}
        </button>
      ))}
      <button disabled={topicId === ''} onClick={handleSubmit}>Confirm</button>
    </div>
  )
}

export default NewPost