import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import writeGood from 'write-good'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import { StyledAnalysisContainer, StyledPaper } from '../../../../styles/mui/StyledComponents'

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
      <StyledAnalysisContainer>
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
                {shapeText(obj.reason)[0]}
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
          <Box sx={{ display: 'flex', alignItems: "center", marginBottom: '5px'}} key={idx}>
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
                {shapeText(obj.reason)[0]}
              </Typography>
            </Fade>
            <Fade in={true} timeout={1000}>
              <Typography style={{ color: "#bcbcbc"}}>
                {shapeText(obj.reason)[1]}
              </Typography>
            </Fade>
          </Box>
        ))}
        <Divider sx={{ fontSize: '1rem' }} />
        {keywords.length 
          ? <Typography>Suggestions:</Typography>
          : ''
        }
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