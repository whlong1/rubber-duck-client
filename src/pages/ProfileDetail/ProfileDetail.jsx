import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { useParams } from 'react-router-dom'
import Followers from './components/Followers'
import UserCard from '../../components/UserCard/UserCard'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { StyledCard } from '../../pages/Browse/components/mui/StyledComponents'

const ProfileDetail = ({ user }) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState()
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
      setFollowers(profileData.followers)
      setFollowing(profileData.following)
    }
    fetchProfile()
  }, [profileId])

  return (
    profile &&
    <>
      <h1 style={{ color: 'white' }}>
        Hello. This is {profile._id === user.profile ? 'your profile.' : `${profile.name}'s profile.`}
      </h1>
      Followers:
      <Stack spacing={1} direction='row' >
        {followers.map(follower =>
          <UserCard author={follower} key={follower._id} />
        )}
      </Stack>
      Following:
      <Stack spacing={1} direction='row' >
        {following.map(follower =>
          <UserCard author={follower} key={follower._id} />
        )}
      </Stack>
      Interests:
      <Stack spacing={1} direction='row'>
        {profile.interests?.map((interest) =>
          <StyledCard key={interest._id}>{interest.name}</StyledCard>
        )}
      </Stack>
      <Box>
        <List 
          sx={{
          maxWidth: '500px',
          bgcolor: 'background.paper'
          }}
          aria-label="details"
        >
          <ListItem disablePadding>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={`Occupation: ${profile.occupation}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={`Email: ${profile.email}`} />
          </ListItem>
          {profile.education && 
          <ListItem disablePadding>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={`Education: ${profile.education}`} />
          </ListItem>
          }
          <ListItem disablePadding>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={`Zip: ${profile.zip}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={`Date of Birth: ${profile.dob.slice(0, 10)}`} />
          </ListItem>
        </List>
      </Box>

        Bookmarks:
        {profile.bookmarks?.map(bookmark =>
          <ul key={bookmark._id}>{bookmark}</ul>
        )}

      Posts: {profile.posts?.map(post =>
        <ul key={post._id}>{post.name}</ul>
      )}
      <Followers 
        user={user} 
        followers={followers} 
        setFollowers={setFollowers} 
        myFollowers={profile.followers} 
        profileId={profileId} 
      />
    </>
  )
}

export default ProfileDetail

