import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function PostForm({ text, setText, handleSubmit }) {
  return (
    <Box sx={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 500 }}>
      <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
        <TextField
          required
          multiline
          fullWidth
          minRows={8}
          maxRows={20}
          name="text"
          type="text"
          value={text}
          spellCheck="true"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" fullWidth variant='contained' sx={{ marginTop: '1rem' }}>Submit</Button>
      </form>
    </Box>
  )
}

export default PostForm