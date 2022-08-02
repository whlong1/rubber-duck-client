import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

const show = async (id) => {
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

const incrementViews = async (id) => {
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

const bookmarkPost = async (id) => {
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

const removeBookmark = async (id) => {
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

const castVote = async (postId, iterationId, vote) => {
  try {
    const path = `${BASE_URL}/${postId}/iterations/${iterationId}/votes`
    const res = await fetch(path, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify({vote:vote}),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

const undoVote = async (postId, iterationId) => {
  try {
    const path = `${BASE_URL}/${postId}/iterations/${iterationId}/votes`
    const res = await fetch(path, {
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

const createComment = async (postId, iterationId, comment) => {
  try {
    const path = `${BASE_URL}/${postId}/iterations/${iterationId}/comments`
    const res = await fetch(path, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(comment),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export {
  show,
  castVote,
  undoVote,
  bookmarkPost,
  removeBookmark,
  incrementViews,
  createComment
}