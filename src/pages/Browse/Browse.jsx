import { useState, useEffect } from 'react'
import * as topicService from '../../services/topicService'


// Components
import TopicList from './components/TopicList'
import CategoryList from './components/CategoryList'

const Browse = () => {
  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState('')
  const categories = [
    'Math',
    'Science',
    'Computer Science'
  ]

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected)
      console.log(data)
    }
    return () => fetchTopics()
  }, [selected])

  return (
    <>
      <h1>Browse</h1>
      <h3>Select a category:</h3>
      <CategoryList
        categories={categories}
        setSelected={setSelected}
      />

      <TopicList topics={topics} />
    </>
  )
}

export default Browse