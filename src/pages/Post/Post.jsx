import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as Diamond } from '../../assets/diamond-icon.svg'

import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { ratingOptions } from '../../styles/theme'

const StyledRating = styled(Rating)(ratingOptions)

const Post = ({ user, post }) => {
  const { author } = post
  const { text, rating } = post.iterations.length && post.iterations[0]

  return (
    <Link to={`/posts/${post._id}`}>
      <Card
        sx={{ width: { xs: 400, md: 275 }, minHeight: { xs: 300, md: 325 } }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          backgroundColor: 'rgb(18,18,18)',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))'
        }}>
        <CardContent>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <Typography
              sx={{
                fontSize: '14',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                display: '-webkit-box'
              }}
              color="text.secondary"
              gutterBottom
            >
              {author?.name}
            </Typography>
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
          <Typography sx={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 6,
            overflow: 'hidden',
            display: '-webkit-box',
          }
          }>
            {text}
          </Typography>
        </CardContent>
        <Typography
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '75px', opacity: '.5'
          }}>
          08/07/22
        </Typography>
      </Card>
    </Link>
  )
}

export default Post;