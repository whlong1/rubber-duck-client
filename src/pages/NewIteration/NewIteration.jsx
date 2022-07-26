import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import PostForm from './/components/PostForm/PostForm'
import Analysis from './components/Analysis/Analysis'
import * as postService from '../../services/postService'

// createIteration
// findKeywords

function NewIteration(props) {
  const { postId, topicId } = useParams()

  console.log(postId)
  const [topic, setTopic] = useState()
  const [text, setText] = useState('')
  const [keywords, setKeywords] = useState([])


  const handleSubmit = async (e) => {
    const data = await postService.createIteration()
  }

  useEffect(() => {
    const fetchKeyWords = async () => {
      const data = await postService.findKeywords(topicId, postId)
      setTopic(data.topic)
      setKeywords(data.keywords)
    }
    fetchKeyWords()
  }, [topicId, postId])

  console.log(keywords, topic)

  return (
    <div>
      <h3>
        {topic.category}
      </h3>
      <h1>
        {topic.title}
      </h1>
      <PostForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <Analysis text={text} keywords={keywords} />
    </div>
  )
}

export default NewIteration