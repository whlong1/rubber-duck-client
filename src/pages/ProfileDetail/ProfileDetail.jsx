import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { useParams } from 'react-router-dom'
import Followers from './components/Followers'

const ProfileDetail = ({ user }) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])

  return (
    profile &&
    <>
      <h1 style={{ color: 'white' }}>
        Hello. This is {profile._id === user.profile ? 'my profile.' : `${profile.name}'s profile.`}
      </h1>
      Followers:
      {profile?.followers?.map(follower =>
        <ul key={follower._id}>{follower.name}</ul>
      )}
      Following:
      {profile.following?.map(follower =>
        <>
          <ul key={follower._id}>{follower.name}</ul> 
        </>
      )}
      Interests:
      {profile.interests?.map((interest) =>
        <ul key={interest._id}>{interest.name}</ul>
      )}
      Occupation: {profile.occupation}
      Email: {profile.email}
      Education: {profile.education}
      Zip: {profile.zip}
      Bookmarks:
      {profile.bookmarks?.map(bookmark =>
        <ul key={bookmark._id}>{bookmark}</ul>
      )}
      Date of Birth: {profile.dob}<br />
      Posts: {profile.posts?.map(post =>
        <ul key={post._id}>{post.name}</ul>
      )}
      <Followers user={user} myFollowers={profile.followers} profileId={profileId}/>
    </>
  )
}

export default ProfileDetail

