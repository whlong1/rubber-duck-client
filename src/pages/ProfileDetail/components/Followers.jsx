import { useState } from 'react'
import * as profileService from '../../../services/profileService'

const Followers = ({ user, followers, setFollowers, profileId }) => {

  const addFollower = async () => {
    const data = await profileService.follow(profileId)
    console.log(data.follower)
    setFollowers([...followers, data.follower])
  }

  const removeFollower = async () => {
    await profileService.unfollow(profileId)
    setFollowers(followers.filter(follower => {
      console.log(follower._id !== user.profile)
      return follower._id !== user.profile
    }))
  }

  return (
    <>
      {followers.map((f) => f._id).includes(user.profile) ?
        <button onClick={removeFollower}>Unfollow</button>
        :
        <button onClick={addFollower}>Follow User</button>
      }
    </>
  )
}

export default Followers
