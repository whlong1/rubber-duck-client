import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/topics`

export const create = async (topic) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(topic),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
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

export const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
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
  create,
  index,
  show
}
