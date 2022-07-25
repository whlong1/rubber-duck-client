import {useState} from 'react'
import Post from '../Post'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Skeleton from '@mui/material/Skeleton'
import Button from '@mui/material/Button'
import { seedData } from '../../../assets/seedData/seedData'

const PostList = ({ user }) => {
  const [loading, setLoading] = useState(true)

  const seedPosts = seedData.map((post, uuid) => (
    <Post key={uuid} post={post} />
  ))

  const skeleton = [...'placeholdr'].map((skeleton, uuid) => (
    <Card 
      sx={{ maxWidth: 275, maxHeight: 225 }} 
      key={uuid} 
      style={{ padding: '1rem' }}
    >
      <Skeleton variant="rectangular" animation="wave" width={245} height={155} />
      <Skeleton animation="wave" width={245} height={50} />
    </Card>
  ))

  return ( 
    <>
      <Button onClick={() => setLoading(!loading)}> Toggle Loading </Button>
      <Box style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        { loading 
          ? skeleton
          : seedPosts
        }
      </Box>
    </>
   );
}
 
export default PostList;