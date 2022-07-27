import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import writeGood from 'write-good'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'

// Utils
import { findWordCount, writingTips } from '../../utils/utils'

function Analysis({ text, keywords }) {
  const [tips, setTips] = useState([])
  const [warnings, setWarnings] = useState([])
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarnings(writeGood(text))
      setWordCount(findWordCount(text))
      setTips(writeGood(text, { checks: writingTips }))
    }, 1000)
    return () => clearTimeout(timer)
  }, [text])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%'}}>
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
            <Typography style={{ color: "#bcbcbc" }}>
              {obj.reason}
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
            <Typography style={{ color: "#bcbcbc" }}> {obj.reason} </Typography>
          </Fade>
        </Box>
      ))}
      <Divider sx={{ fontSize: '1rem' }} />
      <Typography>Suggestions:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '10px' }}>
        {keywords.map((word, idx) => (
            <Chip key={idx} label={word} style={{ color: '#e36350' }} />
        ))}
      </Box>
      <p>{wordCount}</p>
    </Box>
  )
}

export default Analysis