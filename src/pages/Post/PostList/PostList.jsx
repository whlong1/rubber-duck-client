import {useState} from 'react'
import Post from '../Post'
import Button from '@mui/material/Button'
// import seedData from 

const PostList = ({ user }) => {
  const [loading, setLoading] = useState(true)


  const seedPosts = seedData.map((post, uuid) => (
    <Post key={uuid} post={post} />
  ))

  return ( 
    <>
    <Button onClick={() => setLoading(!loading)}> Toggle Loading </Button>
    { loading 
      ? <p>skeleton placeholder</p>
      : <> {seedPosts} </>
    }
    </>
   );
}
 
export default PostList;