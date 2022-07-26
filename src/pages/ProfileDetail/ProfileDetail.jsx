import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { useParams } from 'react-router-dom'

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
      {profile?.followers?.map((follower, idx) =>
        <ul key={idx}>{follower.name}</ul>
      )}
      Following:
      {profile.following?.map((follower, idx) =>
        <ul key={idx}>{follower.name}</ul>
      )}
      Interests:
      {profile.intrests?.map((intrest, idx) =>
        <ul key={idx}>{intrest.name}</ul>
      )}
      Occupation: {profile.occupation}
      Email: {profile.email}
      Education: {profile.education}
      Zip: {profile.zip}
      Bookmarks:
      {profile.bookmarks?.map((bookmark, idx) =>
        <ul key={idx}>{bookmark}</ul>
      )}
      Date of Birth: {profile.dob}<br />
      Posts: {profile.posts?.map((post, idx) =>
        <ul key={idx}>{post.name}</ul>
      )}
    </>
  )
}

export default ProfileDetail

