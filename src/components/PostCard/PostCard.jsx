import { Link } from 'react-router-dom'
import SvgIcon from '@mui/material/SvgIcon'
import CardContent from '@mui/material/CardContent'
import { ReactComponent as Diamond } from '../../assets/diamond-icon.svg'

import Rating from './components/Rating'

import {
  Post,
  BodyTypography,
  DateTypography,
  AuthTypography,
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
            <AuthTypography color="text.secondary" gutterBottom>
              {author?.name}
            </AuthTypography>
            <Rating rating={rating} />
          </StyledBoxSpaceBetween>
          <BodyTypography>{text}</BodyTypography>
        </CardContent>
        <DateTypography>{createdAt.slice(0, 10)}</DateTypography>
      </Post>
    </Link>
  )
}

export default PostCard