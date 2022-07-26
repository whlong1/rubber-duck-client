import { useState, useEffect } from 'react'
import * as topicService from '../../services/topicService'

const Browse = () => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(search)
      console.log(data)
    }
    return () => fetchTopics()
  }, [])

  return (
    <>
    </>
  )
}

export default Browse