import * as postService from '../../../../services/postService'

const VoteHandler = ({ postId, iteration }) => {

  const handleVote = async (vote) => {
    await postService.castVote(postId, iteration._id, vote)
  }

  return (
    <div>
      <button onClick={() => handleVote(1)}>UpVote</button>
      <button onClick={() => handleVote(-1)}>DownVote</button>
    </div>
  )
}

export default VoteHandler