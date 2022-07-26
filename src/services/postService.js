import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

const create = async (post) => {
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

const index = async () => {
  // controller built to accept queries:
  // search, page, sort
  // search will only allow a user to filter posts by topic id
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

const show = async (id) => {
  // returns post, all iterations, and associated comments with each iteration
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
  // Call within Postdetails component after X seconds
  // only returns an ok message, state will need to be updated
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

const findKeywords = async (postId) => {
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

const createIteration = async (postId, iteration) => {
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

const castVote = async (postId, iterationId, vote) => {
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

const undoVote = async (postId, iterationId) => {
  // controller returns updated iteration
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
  create,
  index,
  show,
  incrementViews,
  bookmarkPost,
  removeBookmark,
  findKeywords,
  createIteration,
  castVote,
  undoVote,
  createComment
}