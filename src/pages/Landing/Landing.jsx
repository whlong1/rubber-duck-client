import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CheckBox from '@mui/material/Checkbox'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <Button>TEST</Button>
      <Button color="success" variant="contained">TEST</Button>
      <Button color="error" variant="outlined">TEST!</Button>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Post Modernism
          </Typography>
          <Typography sx={{ 
            WebkitBoxOrient: 'vertical', 
            WebkitLineClamp: 4, 
            overflow: 'hidden', 
            display: '-webkit-box',} 
          }>
            If one examines precultural libertarianism, one is faced with a choice: either accept rationalism or conclude that context is a product of the masses, given that Marxs essay on precultural libertarianism is invalid. The subject is contextualised into a precapitalist dematerialism that includes culture as a reality.
          </Typography>
        </CardContent>
        <CardActions>
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
