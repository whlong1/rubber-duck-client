import { Link } from 'react-router-dom'
import Rating from './components/Rating'
import Author from './components/Author'
import DateDisplay from './components/DateDisplay'
import CardContent from '@mui/material/CardContent'

import {
  Post,
  BodyTypography,
  StyledBoxSpaceBetween
} from '../../styles/mui/StyledComponents'

const PostCard = ({ post }) => {
  const { author } = post
  const { text, rating, createdAt } = post.iterations.length && post.iterations[0]

  return (
    <Link to={`/posts/${post._id}`}>
      <Post sx={{ width: { xs: 400, md: 275 }, minHeight: { xs: 300, md: 325 } }}>
        <CardContent>
          <StyledBoxSpaceBetween>
            <Author author={author} />
            <Rating rating={rating} />
          </StyledBoxSpaceBetween>
          <BodyTypography>
            {text}
          </BodyTypography>
        </CardContent>
        <DateDisplay createdAt={createdAt} />
      </Post>
    </Link>
  )
}

export default PostCard