import { useState } from 'react'
import * as profileService from '../../../services/profileService'

const Followers = ({user, profileId, followers, setFollowers }) => {
  
  const followArr = followers?.map((f)=>f._id)
  console.log(followers.map((f)=>f._id).includes(user.profile));
  const addFollower = async () => {
    await profileService.follow(profileId)
    setFollowers([...followers, user.profile])
  }
  console.log(user);
  const removeFollower = async () => {
    await profileService.unfollow(profileId)
    setFollowers(followers.filter(follower => follower._id !== profileId))
  }

  return (
    <>
      {followArr.includes(user.profile)  ?
        <button onClick={removeFollower}>Unfollow</button>
      :
        <button onClick={addFollower}>Follow User</button>
      }
    </>
  )
}
 
export default Followers
