import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import * as postService from '../../services/postService'



const PostDetails = (props) => {
  const { postId } = useParams()
  const [post, setPost] = useState([])
  const [vote, setVote] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await postService.show(postId)
      setPost(postData)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
 
  }, [])

  const handleVote =(vote)=>{

    
  }
// const castVote = async (postId, iterationId, vote) => {
//   try {
//     const path = `${BASE_URL}/${postId}/iterations/${iterationId}/votes`
 
  
  console.log(post);
  return (  
    <>
      <h1>Post details</h1>
      {post?.topic?.title}
      {post?.author?.name}
      {post?.author?.occupation}
      {post?.iterations?.map((iteration) => 
        <div key={iteration._id}>
          <ul>{iteration.text}</ul>
          <ul>{iteration.createdAt}</ul>
        </div>
      )}
      <button onClick={()=>handleVote(1)}>UpVote</button>
      <button onClick={()=>handleVote(-1)}>DownVote</button>
    </>
  )
}
 
export default PostDetails
