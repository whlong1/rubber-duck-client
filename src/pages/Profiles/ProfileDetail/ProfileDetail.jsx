import { useState, useEffect } from 'react'
import * as profileService from '../../../services/profileService'

const ProfileDetail = ({user}) => {
  const [profile, setProfile] = useState([])
  const [profiles, setProfiles] = useState([])
  

  useEffect(() => {
    const fetchProfile = async (id) => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profilesData = await profileService.index()
      setProfiles(profilesData)
    }
    fetchProfiles()
  }, [])

  const handleFetchId=(id)=>{
    console.log(id);
    const fetchProfile = async (id) => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile(id)
  }
  console.log(user);
  console.log(profile)
  // console.log(profiles)

  return (
    <>  
         {profiles.length ? 
        <>
          {profiles?.map(profile =>
            <ul key={profile._id}>
              <button onClick={()=>handleFetchId(profile._id)}>
                {profile.name}<br/>
              </button>
            </ul>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
      {profile && 

      <h1 style={{color: 'white'}}>Hello. This is {profile._id === user.profile ? 'my profile.' : `${profile.name}'s profile.` }</h1>
  
      }
      Followers: {profile?.followers?.map((follower, idx)=>
        <ul key={idx}>{follower.name}</ul>
      )}   <br/> 
      Following: {profile.following?.map((follower, idx)=>
        <ul key={idx}>{follower.name}</ul>
      )}    <br/> 
      Intrests: {profile.intrests?.map((intrest, idx)=>
        <ul key={idx}>{intrest.name}</ul>
      )}    <br/> 
      Occupation: {profile.occupation}    <br/> 
      Email: {profile.email}    <br/> 
      Education: {profile.education}    <br/> 
      Zip: {profile.zip}<br/> 
      Bookmarks: {profile.bookmarks?.map((bookmark, idx)=>
        <ul key={idx}>{bookmark}</ul>
      )}<br/> 
      Date of Birth: {profile.dob}<br/> 
      Posts: {profile.posts?.map((post, idx)=>
        <ul key={idx}>{post.name}</ul>
      )}<br/> 
    </>
  )
}
 
export default ProfileDetail

