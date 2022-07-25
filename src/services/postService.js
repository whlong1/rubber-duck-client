import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

export const create = async (post) => {
  // this service function requires a topicId in submitted formData
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(post),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const index = async () => {
  // controller built to accept queries:
  // search, page, sort
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

export const incrementViews = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/views`, {
      method: "PATCH",
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

export const bookmarkPost = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/bookmarks`, {
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

export const removeBookmark = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/bookmarks`, {
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

export const newIteration = async (postId) => {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/iterations`, {
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

export const createIteration = async (postId, iteration) => {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/iterations`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(iteration),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const castVote = async (postId, iterationId, vote) => {
  // controller expects the following:
  // req.body.vote: 1    OR    req.body.vote: -1
  // controller responds with updated iteration object
  try {
    const path = `${BASE_URL}/${postId}/iterations/${iterationId}/votes`
    const res = await fetch(path, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(vote),
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
  show,
  incrementViews,
  bookmarkPost,
  removeBookmark,
  newIteration,
  createIteration


}