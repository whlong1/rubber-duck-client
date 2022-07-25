import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

const index = async () => {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

const show = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

const follow = async (id) => {
  // follower is found through req.user.profile
  // followee is found through req.params.id
  // response: msg: `You are now following ${followee.name}.`
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const unfollow = async (id) => {
  // follower is found through req.user.profile
  // followee is found through req.params.id
  // response: msg: `You are no longer following ${followee.name}.`
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}




export {
  index,
  show,
  follow,
  unfollow
}
