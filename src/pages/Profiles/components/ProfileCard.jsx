import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { CenteredBox } from '../../Browse/components/mui/StyledComponents'

const StyledProfileCard = styled(Card)(() => ({
  width: '300px', 
  margin: '1rem', 
  height: '250px'
}));

const ProfileCard = ({ profile }) => {
  return (
    <StyledProfileCard>
      <Paper elevation={4}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar src={''} />
        </Box>
        <Box sx={{ marginTop: '0'}}>
          <Typography variant="h5">{profile.name}</Typography>
          <Typography variant="p" sx={{ color: '#bbbbbb'}}>{profile.occupation}</Typography>
        </Box>
      </CardContent>
      </Paper>
      <Paper sx={{ height: '100%' }} elevation={0}>
        <Box sx={{ display: 'flex', height: '120px' }}>
          <CenteredBox p={1} flex={'auto'} sx={{ flexDirection: 'column'}} >
            <p>Followers</p>
            <Avatar>{profile.followers.length}</Avatar>
          </CenteredBox>
          <CenteredBox p={1} flex={'auto'} sx={{ flexDirection: 'column'}}>
            <p>Following</p>
            <Avatar>{profile.following.length}</Avatar>
          </CenteredBox>
        </Box>
      </Paper>
    </StyledProfileCard>
  );
};

export default ProfileCard