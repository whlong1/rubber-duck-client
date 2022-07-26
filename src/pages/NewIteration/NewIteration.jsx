import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
// import PostForm from './components/PostForm/PostForm'
// import Analysis from './components/Analysis/Analysis'
// import * as postService from '../../services/postService'

function NewIteration(props) {
  const {postId} = useParams()

  // http://localhost:3001/api/posts/62e02cda944d8893bcbcb337/iterations

  // const [text, setText] = useState('')
  // const [keywords, setKeywords] = useState([])


  const handleSubmit = async (e) => {

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
      {/* <PostForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <Analysis text={text} keywords={keywords} /> */}
    </div>
  )
}

export default NewIteration