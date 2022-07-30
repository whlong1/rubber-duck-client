import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const Keywords = ({ keywords, handleClickSuggestion }) => {
  return (
    <>
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
    </>
  )
}

export default Keywords