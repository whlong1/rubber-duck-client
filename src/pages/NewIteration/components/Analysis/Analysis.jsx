import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import writeGood from 'write-good'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import AnalysisPopper from './AnalysisPopper'
import { StyledAnalysisContainer, StyledFeedbackBox, StyledPaper } from '../../../../styles/mui/StyledComponents'

// Utils
import { writingTips } from '../../utils/utils'

function Analysis({ text, keywords, handleClickSuggestion }) {
  const [tips, setTips] = useState([])
  const [warnings, setWarnings] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarnings(writeGood(text))
      setTips(writeGood(text, { checks: writingTips }))
    }, 1000)
    return () => clearTimeout(timer)
  }, [text])

  const shapeText = (string) => {
    let caughtWord = string.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "")
    return [caughtWord, string.slice(caughtWord.length + 3)]
  }

  return (
    <StyledPaper elevation={0}>
      <AnalysisPopper tips={tips} warnings={warnings} />
      <StyledAnalysisContainer>
        <StyledFeedbackBox>
          <Paper>
        {tips.map((obj, idx) => (
          <Box sx={{ display: 'flex', alignItems: "center", marginBottom: '5px'}} key={idx}>
            <Fade in={true} timeout={1000}>
              <Chip 
                label="suggestion" 
                variant="outlined" 
                color="warning" 
                style={{height: '20px', marginRight: '10px'}} 
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
                label="warning" 
                variant="outlined" 
                color="error" 
                style={{ height: '20px', width:'80px', marginRight: '10px'}}
              />
            </Fade>
            <Fade in={true} timeout={1000}>
              <Typography style={{ color: "#ffffff" }}>
                {shapeText(obj.reason)[0]}&nbsp;
              </Typography>
            </Fade>
            <Fade in={true} timeout={1000}>
              <Typography style={{ color: "#bcbcbc"}}>
                {shapeText(obj.reason)[1]}
              </Typography>
            </Fade>
          </Box>
        ))}
        </Paper>
        </StyledFeedbackBox>
        <Divider sx={{ fontSize: '1rem', marginTop: '.5rem' }} flexItem />
        <Box sx={{ marginTop: '.5rem', width: '100%' }}>
        { !!keywords.length && <Typography>Suggestions:</Typography> }
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