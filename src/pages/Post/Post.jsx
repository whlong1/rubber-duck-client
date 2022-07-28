import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as Diamond } from '../../assets/diamond-icon.svg'
import { AuthTypography, BodyTypography, PostCard, DateTypography, StyledRating } from '../../styles/mui/StyledComponents'

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
              icon={<SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon>}
              emptyIcon={< SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon>}
            />
          </Box>
          <BodyTypography> {text} </BodyTypography>
        </CardContent>
        <DateTypography> 08/07/22 </DateTypography>
      </PostCard>
    </Link>
  )
}

export default Post;