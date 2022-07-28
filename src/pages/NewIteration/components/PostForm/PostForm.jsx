import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

function PostForm({ text, handleSubmit, handleCheckText, characterLimit, handleClear }) {
  return (
    <Box sx={{ padding: '2rem', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', width: 500 }}>
      <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
        <TextField
          sx={{ backgroundColor: '#2e2e2e' }}
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
          disabled={text.trim().length <= 0}
          type="submit" 
          fullWidth 
          variant='contained' 
          sx={{ marginTop: '1rem' }}
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default PostForm