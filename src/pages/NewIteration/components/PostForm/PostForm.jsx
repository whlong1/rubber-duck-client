import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { StyledPostFormContainer, StyledPaper, StyledBoxSpaceBetween } from '../../../../styles/mui/StyledComponents'

function PostForm({ text, handleSubmit, handleCheckText, characterLimit, handleClear }) {
  const hasText = text.trim().length <= 0
  return (
    <StyledPaper elevation={10}>
      <StyledBoxSpaceBetween>
        <Box style={{ padding: '1rem' }}>
         Title
        </Box>
        <Box style={{ padding: '1rem' }}>
         Iteration
        </Box>
      </StyledBoxSpaceBetween>
      <StyledPostFormContainer>
        <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
          <TextField
            inputProps={{ style: {fontSize: 24, lineHeight: 1.2} }}
            sx={{ backgroundColor: '#2e2e2e'}}
            required
            multiline
            fullWidth
            minRows={8}
            maxRows={20}
            name="text"
            type="text"
            value={text}
            spellCheck="true"
            onChange={(e) => handleCheckText(e, e.target.value)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button onClick={handleClear} color="secondary">Clear</Button>
            <Typography 
              sx={{ color: text.length > (characterLimit * .8) ? 'red' : 'white' }}
            >
              {`${text.length}/${characterLimit}`}
            </Typography>
          </Box>
          <Button
            disabled={hasText}
            type="submit" 
            fullWidth 
            variant='contained' 
            sx={{ marginTop: '1rem' }}
          >
            Submit
          </Button>
        </form>
      </StyledPostFormContainer>
    </StyledPaper>
  )
}

export default PostForm