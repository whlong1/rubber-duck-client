import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CheckBox from '@mui/material/Checkbox'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import styles from './Landing.module.css'
import { ratingOptions } from '../../styles/theme'

const StyledRating = styled(Rating)(ratingOptions);

const Landing = ({ user }) => {
  const value = 3
  return (
    <main className={styles.container}>
      <h1>Sup, {user ? user.name : 'duck?'}</h1>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Post Modernism
            </Typography>
            <StyledRating 
              name="rating" 
              value={value} 
              readOnly 
              max={4}
              defaultValue={4}
              icon={<DiamondRoundedIcon fontSize='inherit' />} 
              emptyIcon={<DiamondOutlinedIcon fontSize="inherit" />}
            />
          </Box>
          <Typography sx={{ 
            WebkitBoxOrient: 'vertical', 
            WebkitLineClamp: 4, 
            overflow: 'hidden', 
            display: '-webkit-box',} 
          }>
            If one examines precultural libertarianism, one is faced with a choice: either accept rationalism or conclude that context is a product of the masses, given that Marxs essay on precultural libertarianism is invalid. The subject is contextualised into a precapitalist dematerialism that includes culture as a reality.
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent:'space-between' }}>
          <Button size="small">Details</Button>
          <CheckBox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </CardActions>
      </Card>
    </main>
  )
}

export default Landing
