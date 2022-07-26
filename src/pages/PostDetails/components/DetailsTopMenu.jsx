import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Divider from '@mui/material/Divider'

const DetailsTopMenu = ({ topic, post, user }) => {
  const navigate = useNavigate()
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '3rem', marginBottom: 0 }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', marginBotton: '1rem', width: '100%' }} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box>
          <Stack>
            <Typography variant='h5' sx={{ marginBottom: { md: '20px', sm: '0' } }}>{topic.category}</Typography>
            <Typography style={{ fontFamily: 'abril-display' }} sx={{ lineHeight: { md: '.5', xs: '1.2' } }} variant='h2'>{topic.title}</Typography>
          </Stack>
        </Box>
        <Box style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
          {user.profile === post.author._id &&
            <Button
              onClick={() => navigate(`/topics/${topic._id}/posts/${post._id}/iterations`)}
              variant="contained" sx={{ height: 40, minWidth: 120 }} endIcon={<AddCircleOutlineIcon />}
            >New Iteration
            </Button>
          }
        </Box>
      </Box>
      <Divider textAlign="left" sx={{ color: 'primary', width: '100%', margin: '1rem', visibility: { xs: 'hidden', md: 'visible' } }}></Divider>
    </Box>
  )
}

export default DetailsTopMenu