import { useState, useEffect } from 'react'
import Post from '../Post'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Button from '@mui/material/Button'
import { seedData } from '../../../assets/seedData/seedData'

const PostList = ({ user }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const seedPosts = seedData.map((post, uuid) => (
    <Post key={uuid} post={post} />
  ))

  const skeleton = [...'placeholdr'].map((skeleton, uuid) => (
    <Card 
      sx={{ maxWidth: 275, height: 325 }} 
      key={uuid} 
      style={{ padding: '1rem' }}
    >
      <CardContent style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0 16px 0'}}>
        <Skeleton animation="wave" height={30} width="60%" />
        <Skeleton animation="wave" height={30} width="30%" />
      </CardContent>
      <Skeleton variant="rectangular" animation="wave" width={245} height={180} />
      <Skeleton animation="wave" width={245} height={60} style={{ marginTop: '12px' }} />
    </Card>
  ))

  return ( 
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '3rem'}}>
      <Button onClick={() => setLoading(!loading)}> Toggle Loading </Button>
      <Box style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        { loading 
          ? skeleton
          : seedPosts
        }
      </Box>
    </Box>
   );
}
 
export default PostList;