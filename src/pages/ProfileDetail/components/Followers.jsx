import { useState } from 'react'
import * as profileService from '../../../services/profileService'

const Followers = ({user, myFollowers, profileId }) => {
  const [followers, setFollowers] = useState(myFollowers)
  const followArr = myFollowers.map((f)=>f._id)
  
  const addFollower = async () => {
    await profileService.follow(profileId)
    setFollowers(...followers, user.profile)
  }

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
