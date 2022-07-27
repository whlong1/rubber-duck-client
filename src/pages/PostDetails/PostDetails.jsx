import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import * as postService from '../../services/postService'

const PostDetails = () => {
  const { postId } = useParams()
  const [post, setPost] = useState()
  // const [vote, setVote] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await postService.show(postId)
      setPost(postData)
    }
    fetchPosts()
  }, [])

  const handleVote = async (vote) => {
    await postService.castVote(postId, post.iterations[0]._id, vote)
  }

  console.log(post)

  if (!post) {
    return (
      <div>Holdon, we're just getting our ducks in a row...</div>
    )
  }


  return (
    post &&
    <>
      <h1>DETAILS</h1>
      <h1>Post details</h1>
      {post.topic.title}
      {post.topic.category}
      {post.author.name}
      {post.author.occupation}
      {post.iterations?.map((iteration) =>
        <div key={iteration._id}>
          <ul>{iteration.text}</ul>
          <ul>{iteration.createdAt}</ul>
        </div>
      )}
      <button onClick={() => handleVote(1)}>UpVote</button>
      <button onClick={() => handleVote(-1)}>DownVote</button>
    </>
  )
}

export default PostDetails
