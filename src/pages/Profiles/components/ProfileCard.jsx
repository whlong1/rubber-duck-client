import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { CenteredBox } from '../../Browse/components/mui/StyledComponents'

const StyledCard = styled(Card)(() => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: 'gray',
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 500,
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

const ProfileCard = ({ profile }) => {
  return (
    <StyledCard sx={{ width: '350px', margin: '1rem', height: '300px' }} >
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
          <Avatar src={''} />
        </Box>
        <Box sx={{ marginTop: '0'}}>
          <h3>{profile.name}</h3>
          <span>{profile.occupation}</span>
        </Box>
      </CardContent>
      <Divider light />
      <Box sx={{ display: 'flex' }}>
        <CenteredBox p={2} flex={'auto'} sx={{ flexDirection: 'column'}} >
          <p>Followers</p>
          <Avatar>{profile.followers.length}</Avatar>
        </CenteredBox>
        <CenteredBox p={2} flex={'auto'} sx={{ flexDirection: 'column'}}>
          <p>Following</p>
          <Avatar>{profile.following.length}</Avatar>
        </CenteredBox>
      </Box>
    </StyledCard>
  );
};

export default ProfileCard