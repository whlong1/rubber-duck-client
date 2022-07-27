import { useState } from 'react'
import * as profileService from '../../../services/profileService'

const Followers = ({ user, followers, setFollowers }) => {

  const addFollower = async () => {
    await profileService.follow(user.profile)
    setFollowers([...followers, { _id: user.profile }])
  }

  const removeFollower = async () => {
    await profileService.unfollow(user.profile)
    setFollowers(followers.filter(follower => follower._id !== user.profile))
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
