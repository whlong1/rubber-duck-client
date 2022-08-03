import Box from '@mui/material/Box'
import { CenteredBox } from './components/mui/StyledComponents'
import Typography from '@mui/material/Typography'
import FunctionsIcon from '@mui/icons-material/Functions';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import Divider from '@mui/material/Divider'

import { useState, useEffect } from 'react'
import * as topicService from '../../services/topicService'

// Components
import TopicList from './components/TopicList'
import CategoryList from './components/CategoryList'

const Browse = (props) => {
  const categories = [
    {name: 'Math', color:'#F75847', icon: <FunctionsIcon />},
    {name: 'Science', color:'#00B1C6', icon: <ScienceIcon />},
    {name: 'History', color:'#7E7568', icon: <PublicIcon />},
    {name: 'Literature', color:'#0CBA6E', icon: <AutoStoriesIcon />},
    {name: 'CompSci', color:'#FFB201', icon: <CodeIcon />},
  ]

  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState(categories[0])

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await topicService.index(selected.name)
      setTopics(data)
    }
    fetchTopics()
  }, [selected])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <CenteredBox sx={{ flexDirection: {sm: 'column', md: 'row', xs: 'column'} }}>
        <Typography variant='h2' style={{ fontFamily: 'abril-display' }}>
          Browse
        </Typography>
        <CategoryList
          categories={categories}
          setSelected={setSelected}
        />
      </CenteredBox>
      <Divider />
      <TopicList topics={topics} />
    </Box>
  )
}

export default Browse