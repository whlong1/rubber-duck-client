import * as profileService from '../../../services/profileService'
import Button from '@mui/material/Button'

const Followers = ({ user, followers, setFollowers, profileId }) => {

  const addFollower = async () => {
    const data = await profileService.follow(profileId)
    setFollowers([...followers, data.follower])
  }

  const removeFollower = async () => {
    await profileService.unfollow(profileId)
    setFollowers(followers.filter(follower => {
      return follower._id !== user.profile
    }))
  }

  return (
    user.profile !== profileId &&
    <>
      {followers.map((f) => f._id).includes(user.profile) ?
        <Button variant="outlined" onClick={removeFollower}>Unfollow</Button>
        :
        <Button variant="contained" onClick={addFollower}>Follow User</Button>
      }
    </>
  )
}

export default Followers
