import { useState, useEffect } from 'react'

// Components
import PostForm from './components/PostForm/PostForm'
import Analysis from './components/Analysis/Analysis'

function NewPost() {
  const [text, setText] = useState('')
  const [keywords, setKeywords] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Text:', text)
  }

  useEffect(() => {
    const fetchKeyWords = () => {
      const arr = [
        { word: 'for loop', score: 5 },
        { word: 'repeatedly', score: -1 },
        { word: 'washing machine', score: -10 },
      ]
      setKeywords(arr)
    }
    fetchKeyWords()
  }, [])

  return (
    <div>
      <h1>Category</h1>
      <h3>Topic</h3>
      <PostForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <Analysis text={text} keywords={keywords} />
    </div>
  )
}

export default NewPost