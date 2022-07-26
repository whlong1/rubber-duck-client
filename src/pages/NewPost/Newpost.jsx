import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import PostForm from './components/PostForm/PostForm'
import Analysis from './components/Analysis/Analysis'

import * as postService from '../../services/postService'


function NewPost() {
  const { topicId } = useParams()
  const [text, setText] = useState('')
  // const [keywords, setKeywords] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Text:', text)
  }

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
      <h3>Topic</h3>
      {/* <PostForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <Analysis text={text} keywords={keywords} /> */}
    </div>
  )
}

export default NewPost