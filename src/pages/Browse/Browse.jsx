import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
    <Box style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <Typography variant='h2'>Browse</Typography>
      <Typography variant='h6'>Select a category:</Typography>
      <CategoryList
        categories={categories}
        setSelected={setSelected}
      />
      <TopicList topics={topics} />
    </Box>
  )
}

export default Browse