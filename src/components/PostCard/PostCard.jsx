import { Link } from 'react-router-dom'
import Rating from './components/Rating'
import Author from './components/Author'
import BodyText from './components/BodyText'
import DateDisplay from './components/DateDisplay'
import CardContent from '@mui/material/CardContent'
import { Post, StyledBoxSpaceBetween } from '../../styles/mui/StyledComponents'

const PostCard = ({ post }) => {
  const { text, rating, createdAt, author, _id } = post
  return (
    <Link to={`/posts/${_id}`}>
      <Post sx={{ width: { xs: 400, md: 275 }, minHeight: { xs: 300, md: 325 } }}>
        <CardContent>
          <StyledBoxSpaceBetween>
            <Author author={author} />
            <Rating rating={rating} />
          </StyledBoxSpaceBetween>
          <BodyText text={text} />
        </CardContent>
        <DateDisplay createdAt={createdAt} />
      </Post>
    </Link>
  )
}

export default PostCard