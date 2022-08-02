import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/topics`

const create = async (topic) => {
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

const index = async (search) => {
  try {
    const res = await fetch(`${BASE_URL}?search=${search}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

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

const createPost = async (topicId) => {
  try {
    const res = await fetch(`${BASE_URL}/${topicId}/posts`, {
      method: "POST",
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

const indexPosts = async (topicId, search, sort, page) => {
  try {
    const path = `${BASE_URL}/${topicId}/posts?search=${search}&sort=${sort}&page=${page}`
    const res = await fetch(path, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

const newIteration = async (topicId, postId) => {
  try {
    const res = await fetch(`${BASE_URL}/${topicId}/posts/${postId}/iterations`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

const createIteration = async (topicId, postId, iteration) => {
  try {
    const res = await fetch(`${BASE_URL}/${topicId}/posts/${postId}/iterations`, {
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

export {
  create,
  index,
  show,
  createPost,
  indexPosts,
  newIteration,
  createIteration,
}