import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FunctionsIcon from '@mui/icons-material/Functions';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';

import { useState, useEffect } from 'react'
import * as topicService from '../../services/topicService'

// Components
import TopicList from './components/TopicList'
import CategoryList from './components/CategoryList'

const Browse = (props) => {
  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState('Math')

  const categories = [
    {name: 'Math', color:'#F75847', icon: FunctionsIcon},
    {name: 'Science', color:'#00B1C6', icon: ScienceIcon},
    {name: 'History', color:'#7E7568', icon: PublicIcon},
    {name: 'Literature', color:'#0CBA6E', icon: AutoStoriesIcon},
    {name: 'CompSci', color:'#FFB201', icon: CodeIcon},
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