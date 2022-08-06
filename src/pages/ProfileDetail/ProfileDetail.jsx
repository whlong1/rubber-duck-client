import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email'
import SchoolIcon from '@mui/icons-material/School'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { StyledCard, CenteredBox } from '../../pages/Browse/components/mui/StyledComponents'

import Bookmarks from './components/Bookmarks'
import Followers from './components/Followers'
import UserCard from '../../components/UserCard/UserCard'

import * as profileService from '../../services/profileService'
import { Book } from '@mui/icons-material'

const ProfileDetail = ({ user }) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState()
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
      setFollowers(profileData.followers)
      setFollowing(profileData.following)
      setBookmarks(profileData.bookmarks)
    }
    fetchProfile()
  }, [profileId])

  console.log(bookmarks)

  return (
    profile &&
    <CenteredBox sx={{ flexDirection: 'column' }}>
      <h1 style={{ color: 'white' }}>
        Hello. This is {profile._id === user.profile ? 'your profile.' : `${profile.name}'s profile.`}
      </h1>

      <Bookmarks bookmarks={bookmarks} />



      Followers:
      <Stack
        spacing={2}
        direction='row'
        sx={{ marginBottom: '2rem' }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {followers.map(follower =>
          <UserCard author={follower} key={follower._id} />
        )}
      </Stack>
      Following:
      <Stack
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        direction='row'
        sx={{ marginBottom: '2rem' }}
      >
        {following.map(follower =>
          <UserCard author={follower} key={follower._id} />
        )}
      </Stack>
      Interests:
      <Stack spacing={2} direction='row'>
        {profile.interests?.map((interest) =>
          <StyledCard key={interest._id}>{interest.name}</StyledCard>
        )}
      </Stack>
      <Box sx={{ marginBottom: '2rem' }}>
        <List
          sx={{
            maxWidth: '600px',
            padding: '2rem',
            borderTopRightRadius: '4%',
            borderTopLeftRadius: '1%',
            borderBottomLeftRadius: '4%',
            borderBottomRightRadius: '1%',
            bgcolor: 'background.paper'
          }}
          elevation={10}
          aria-label="details"
        >
          <ListItem disablePadding>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={`Occupation: ${profile.occupation}`} />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={`Email: ${profile.email}`} />
          </ListItem>
          {profile.education &&
            <>
              <Divider />
              <ListItem disablePadding>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary={`Education: ${profile.education}`} />
              </ListItem>
            </>
          }
          <Divider />
          <ListItem disablePadding>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={`Zip: ${profile.zip}`} />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={`Date of Birth: ${profile.dob.slice(0, 10)}`} />
          </ListItem>
        </List>
      </Box>
      {/* Code to implement User Posts */}
      {/* <CenteredBox sx={{ marginTop: '1rem', flexDirection: 'column' }}>
        Posts:
        <Stack spacing={1} direction='row' sx={{ flexWrap: 'wrap', margin: '2rem 0 2rem 0' }}>
          {profile.posts?.map((post) =>
            <StyledCard key={post._id}>{post.topic.title}</StyledCard>
          )}
        </Stack>
      </CenteredBox> */}
      <Followers
        user={user}
        followers={followers}
        setFollowers={setFollowers}
        myFollowers={profile.followers}
        profileId={profileId}
      />
    </CenteredBox>
  )
}

export default ProfileDetail

