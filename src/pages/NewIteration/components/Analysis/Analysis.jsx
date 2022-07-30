import { useState, useEffect } from 'react'
import AnalysisPopper from './AnalysisPopper'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { StyledAnalysisContainer, StyledFeedbackBox, StyledPaper } from '../../../../styles/mui/StyledComponents'

import { shapeText } from './utils/shapeText'
import { writeGood } from './utils/write-good/write-good'

function Analysis({ text, keywords, handleClickSuggestion }) {
  const [issues, setIssues] = useState([])

  console.log(issues)

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
        <StyledFeedbackBox>
          <Paper elevation={2} sx={{ minWidth: '100%', minHeight: '95%', padding: '.5rem' }}>
            {issues.map((obj, idx) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: "center",
                  marginBottom: '5px'
                }}
                key={idx}
              >
                <Fade in={true} timeout={1000}>
                  <Chip
                    color={obj.color}
                    variant="outlined"
                    label={obj.severity > 1 ? 'warning' : 'suggestion'}
                    style={{ height: '20px', width: '80px', marginRight: '10px' }}
                  />
                </Fade>
                <Fade in={true} timeout={1000}>
                  <Typography style={{ color: "#ffffff" }}>
                    {shapeText(obj.reason)[0]}&nbsp;
                  </Typography>
                </Fade>
                <Fade in={true} timeout={1000}>
                  <Typography style={{ color: "#bcbcbc" }}>
                    {shapeText(obj.reason)[1]}
                  </Typography>
                </Fade>
              </Box>
            ))}
          </Paper>
        </StyledFeedbackBox>
        <Divider sx={{ fontSize: '1rem', marginTop: '.5rem' }} flexItem />
        <Box sx={{ marginTop: '.5rem', width: '100%', padding: '.5rem' }}>
          {!!keywords.length && <Typography>Keywords:</Typography>}
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '10px' }}>
          {keywords.map((word, idx) => (
            <Chip
              key={idx}
              label={word}
              color='success'
              variant='outlined'
              onClick={() => handleClickSuggestion(word)}
            />
          ))}
        </Box>
      </StyledAnalysisContainer>
    </StyledPaper>
  )
}

export default Analysis