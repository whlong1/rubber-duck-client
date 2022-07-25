import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CheckBox from '@mui/material/Checkbox'
import Rating from '@mui/material/Rating'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';

import { ratingOptions } from '../../styles/theme'
import { styled } from '@mui/material/styles'

const StyledRating = styled(Rating)(ratingOptions)

const Post = ({ user, post }) => {
  return (
      <Card sx={{ maxWidth: 275, minHeight: 225 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {post.post}
            </Typography>
            <StyledRating 
              name="rating" 
              value={post.rating} 
              readOnly 
              max={4}
              defaultValue={4}
              icon={<LabelImportantIcon fontSize='inherit' />} 
              emptyIcon={<LabelImportantTwoToneIcon fontSize="inherit" />}
            />
          </Box>
          <Typography sx={{ 
            WebkitBoxOrient: 'vertical', 
            WebkitLineClamp: 3, 
            overflow: 'hidden', 
            display: '-webkit-box',} 
          }>
           {post.text}
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent:'space-between' }}>
          <p>08/07/22</p>
          <CheckBox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </CardActions>
      </Card>
  )
}
 
export default Post;