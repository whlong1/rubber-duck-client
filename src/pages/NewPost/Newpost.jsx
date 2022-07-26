import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import PostForm from './components/PostForm/PostForm'
import Analysis from './components/Analysis/Analysis'

import CategoryList from '../Browse/components/CategoryList'
import TopicList from '../Browse/components/TopicList'

import * as postService from '../../services/postService'


function NewPost(props) {
  const { topicId } = useParams()
  const [text, setText] = useState('')
  const [keywords, setKeywords] = useState([])
  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState('Math')

  const categories = [
    'Math',
    'Science',
    'History',
    'Literature',
    'Computer Science',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Text:', text)
  }

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected)
      setTopics(data)
    }
    fetchTopics()
  }, [selected])

  useEffect(() => {
    const fetchKeyWords = () => {
      const data = await postService.findKeywords(topicId)
      console.log('keyword data::::', data)
      // setKeywords(arr)
    }
    fetchKeyWords()
  }, [topicId])

  return (
    <div>
      <h1>Category</h1>
      <CategoryList
        categories={categories}
        setSelected={setSelected}
      />
      <h3>Topic</h3>
      <TopicList topics={topics} />
      <PostForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <Analysis text={text} keywords={keywords} />
    </div>
  )
}

export default NewPost