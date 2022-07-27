import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import ProfileCard from './components/ProfileCard'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.index()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <Box sx={{ padding: '2rem' }}>
      <h1>All our ducks in a row: </h1>
      {profiles.length
        ?
          <Stack direction='row' space={2}>
            {profiles.map((profile) =>
              <Link key={profile._id} to={`/profiles/${profile._id}`}>
                <ProfileCard profile={profile} />
              </Link>
            )}
          </Stack>
        : <p>No profiles yet</p>
      }
    </Box>
  )
}

export default Profiles