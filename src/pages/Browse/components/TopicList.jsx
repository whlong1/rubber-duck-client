import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import { StyledCard, StyledBox } from './mui/StyledComponents'

const TopicList = (props) => {
  return (
    <StyledBox>
      {props.topics.map((topic) => (
        <Link key={topic._id} to={`/topics/${topic._id}`}>
          <StyledCard>
            <Typography variant='h6'>
              {topic.title}
            </Typography>
          </StyledCard>
        </Link>
      ))}
    </StyledBox>
  )
}

export default TopicList