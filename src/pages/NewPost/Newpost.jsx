import { useState, useEffect } from 'react'

// Components
import PostForm from './components/PostForm/PostForm'
import Analysis from './components/Analysis/Analysis'
import CategoryList from '../Browse/components/CategoryList'
import TopicList from '../Browse/components/TopicList'

import * as postService from '../../services/postService'

import * as topicService from '../../services/topicService'

function NewPost(props) {
  // const [text, setText] = useState('')
  // const [keywords, setKeywords] = useState([])
  const [topics, setTopics] = useState([])
  const [topicId, setTopicId] = useState('')
  const [selected, setSelected] = useState()

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
  }

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected)
      setTopics(data)
    }
    if (selected) fetchTopics()
  }, [selected])

  // useEffect(() => {
  //   const fetchKeyWords = () => {
  //     const data = await postService.findKeywords(topicId)
  //     console.log('keyword data::::', data)
  //     // setKeywords(arr)
  //   }
  //   fetchKeyWords()
  // }, [topicId])

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
      {/* <PostForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <Analysis text={text} keywords={keywords} /> */}
      <button disabled={topicId === ''} onClick={handleSubmit}>Confirm</button>
    </div>
  )
}

export default NewPost