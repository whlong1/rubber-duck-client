import { useState, useEffect } from 'react'
import * as topicService from '../../services/topicService'

// Components
import TopicList from './components/TopicList'
import CategoryList from './components/CategoryList'

const Browse = (props) => {
  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState('Math')

  const categories = [
    'Math',
    'Science',
    'History',
    'Literature',
    'Computer Science',
  ]

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected)
      setTopics(data)
    }
    fetchTopics()
  }, [selected])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Browse</h1>
      <h3>Select a category:</h3>
      <CategoryList
        categories={categories}
        setSelected={setSelected}
      />
      <TopicList topics={topics} />
    </div>
  )
}

export default Browse