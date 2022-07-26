import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import { StyledCard } from './mui/StyledCard'

const TopicList = (props) => {
  return (
    <>
      TopicList 
      {props.topics.map((topic) => (
        <Link key={topic._id} to={`/topics/${topic._id}`}>
          <StyledCard>
            <Typography variant='h3'>
              {topic.title}
            </Typography>
          </StyledCard>
        </Link>
      ))}
    </>
  )
}

export default TopicList