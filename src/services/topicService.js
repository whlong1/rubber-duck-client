import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/topics`

const create = async (topic) => {
  // May send back msg: 'That topic already exists!'
  // if user already has a post on that topic
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
  // search value: category string
  // Example: 'Computer Science'
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

const findPostByTopic = async (topicId) => {
  // when a user is creating a post, the steps are:
  // select cat => select topic => write post
  // when a user selects a topic, use this service to retrieve
  // an existing post they might have on the topic.
  try {
    const res = await fetch(`${BASE_URL}/${topicId}/posts`, {
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
  show,
  findPostByTopic
}