import * as profileService from '../../../services/profileService'

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
        <button onClick={removeFollower}>Unfollow</button>
        :
        <button onClick={addFollower}>Follow User</button>
      }
    </>
  )
}

export default Followers
