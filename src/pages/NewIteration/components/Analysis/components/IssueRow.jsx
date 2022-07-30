import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

// Utils
import { shapeText } from '../utils/shapeText'

const style = {
  display: 'flex',
  marginBottom: '5px',
  alignItems: "center",
}

const IssueRow = ({ issue }) => {
  return (
    <Box sx={style}>
      <Fade in={true} timeout={1000}>
        <Chip
          variant="outlined"
          color={issue.color}
          label={issue.severity > 1 ? 'warning' : 'suggestion'}
          style={{ height: '20px', width: '80px', marginRight: '10px' }}
        />
      </Fade>
      <Fade in={true} timeout={1000}>
        <Typography style={{ color: "#ffffff" }}>
          {shapeText(issue.reason)[0]}&nbsp;
        </Typography>
      </Fade>
      <Fade in={true} timeout={1000}>
        <Typography style={{ color: "#bcbcbc" }}>
          {shapeText(issue.reason)[1]}
        </Typography>
      </Fade>
    </Box>
  )
}

export default IssueRow