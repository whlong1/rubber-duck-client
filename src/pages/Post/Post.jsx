import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as Diamond } from '../../assets/diamond-icon.svg'

import { AuthTypography, BodyTypography, PostCard, DateTypography } from './mui/StyledComponents'

import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { ratingOptions } from '../../styles/theme'

const StyledRating = styled(Rating)(ratingOptions)

const Post = ({ user, post }) => {
  const { author } = post
  const { text, rating } = post.iterations.length && post.iterations[0]

  return (
    <Link to={`/posts/${post._id}`}>
      <PostCard sx={{ width: { xs: 400, md: 275 }, minHeight: { xs: 300, md: 325 } }}>
        <CardContent>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <AuthTypography color="text.secondary" gutterBottom >
              {author?.name}
            </AuthTypography>
            <StyledRating
              name="rating"
              value={rating}
              readOnly
              max={4}
              defaultValue={4}
              style={{ display: 'flex', alignItems: 'center' }}
              icon={<SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon>}
              emptyIcon={< SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon>}
            />
          </Box>
          <BodyTypography> {text} </BodyTypography>
        </CardContent>
        <DateTypography>
          08/07/22
        </DateTypography>
      </PostCard>
    </Link>
  )
}

export default Post;