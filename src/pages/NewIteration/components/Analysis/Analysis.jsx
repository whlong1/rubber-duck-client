import { useState, useEffect } from 'react'

// Components
import Keywords from './components/Keywords'
import IssueList from './components/IssueList'
import AnalysisPopper from './components/AnalysisPopper'

// MUI
import Divider from '@mui/material/Divider'
import { StyledAnalysisContainer, StyledPaper } from '../../../../styles/mui/StyledComponents'

// Utils
import { writeGood } from './utils/write-good/write-good'

function Analysis({ text, keywords, handleClickSuggestion }) {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIssues(writeGood(text))
    }, 1000)
    return () => clearTimeout(timer)
  }, [text])

  return (
    <StyledPaper elevation={0}>
      <AnalysisPopper issues={issues} />
      <StyledAnalysisContainer>
        <IssueList issues={issues} />
        <Divider sx={{ fontSize: '1rem', marginTop: '.5rem' }} flexItem />
        <Keywords keywords={keywords} handleClickSuggestion={handleClickSuggestion} />
      </StyledAnalysisContainer>
    </StyledPaper>
  )
}

export default Analysis