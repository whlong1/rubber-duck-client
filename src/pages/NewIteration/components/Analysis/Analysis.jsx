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
  const [warnings, setWarnings] = useState([])

  console.log(warnings)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarnings(writeGood(text))
    }, 1000)
    return () => clearTimeout(timer)
  }, [text])

  return (
    <StyledPaper elevation={0}>
      <AnalysisPopper warnings={warnings} />
      <StyledAnalysisContainer>
        <StyledFeedbackBox>
          <Paper elevation={2} sx={{ minWidth: '100%', minHeight: '95%', padding: '.5rem' }}>
            {/* {tips.map((obj, idx) => (
              <Box sx={{ display: 'flex', alignItems: "center", marginBottom: '5px' }} key={idx}>
                <Fade in={true} timeout={1000}>
                  <Chip
                    color="warning"
                    label="suggestion"
                    variant="outlined"
                    style={{ height: '20px', marginRight: '10px' }}
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
            ))} */}
            {warnings.map((obj, idx) => (
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
                    label="warning"
                    variant="outlined"
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
          {!!keywords.length && <Typography>Suggestions:</Typography>}
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '10px' }}>
          {keywords.map((word, idx) => (
            <Chip
              key={idx}
              label={word}
              variant='outlined'
              color='success'
              onClick={() => handleClickSuggestion(word)}
            />
          ))}
        </Box>
      </StyledAnalysisContainer>
    </StyledPaper>
  )
}

export default Analysis