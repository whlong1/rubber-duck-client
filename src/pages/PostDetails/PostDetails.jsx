import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import * as postService from '../../services/postService'

// Components
import Iteration from './components/Iteration'
import DetailsTopMenu from './components/DetailsTopMenu'
import UserCard from '../../components/UserCard/UserCard'

const PostDetails = () => {
  const { postId } = useParams()
  const [post, setPost] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await postService.show(postId)
      setPost(postData)
    }
    fetchPosts()
  }, [postId])

  const handleVote = async (vote) => {
    await postService.castVote(postId, post.iterations[0]._id, vote)
  }

  console.log(post)

  if (!post) {
    return <div>Holdon, we're just getting our ducks in a row...</div>
  }

  return (
    post &&
    <>
      <DetailsTopMenu topic={post.topic} />
      <UserCard author={post.author} />

      <Iteration />

      {post.iterations?.map((iteration) =>
        <div key={iteration._id}>
          <ul>{iteration.text}</ul>
          <ul>{iteration.createdAt.slice(0, 10)}</ul>
        </div>
      )}

      <button onClick={() => handleVote(1)}>UpVote</button>
      <button onClick={() => handleVote(-1)}>DownVote</button>
    </>
  )
}

export default PostDetails
