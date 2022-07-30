import IssueRow from './IssueRow'
import Paper from '@mui/material/Paper'
import { StyledFeedbackBox } from '../../../../../styles/mui/StyledComponents'

const IssueList = ({ issues }) => {
  return (
    <StyledFeedbackBox>
      <Paper elevation={2} sx={{ minWidth: '100%', minHeight: '95%', padding: '.5rem' }}>
        {issues.map((issue, idx) => (
          <IssueRow key={idx} issue={issue} />
        ))}
      </Paper>
    </StyledFeedbackBox>
  )
}

export default IssueList