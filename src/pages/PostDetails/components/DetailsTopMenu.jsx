import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const DetailsTopMenu = ({ topic }) => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between', marginBotton: '1rem', width: '100%' }} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box>
        <Stack>
          <Typography variant='h5' sx={{ marginBottom: { md: '20px', sm: '0' } }}>{topic.category}</Typography>
          <Typography style={{ fontFamily: 'abril-display' }} sx={{ lineHeight: { md: '.5', xs: '1.2' } }} variant='h2'>{topic.title}</Typography>
        </Stack>
      </Box>
      <Box style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
        <Button variant="contained" sx={{ height: 40, minWidth: 120 }} endIcon={<AddCircleOutlineIcon />}>
          New Iteration
        </Button>
      </Box>
    </Box >
  )
}

export default DetailsTopMenu