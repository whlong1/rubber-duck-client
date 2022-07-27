import * as postService from '../../../../services/postService'

const VoteHandler = ({ user, postId, iterationsArr, setIterationsArr, iteration }) => {
  const voteArr = iteration.votes.map((v) => v.profileId)

  const handleVote = async (vote) => {
    const res = await postService.castVote(postId, iteration._id, vote)
    setIterationsArr(iterationsArr.map((iter) => iter._id === iteration._id ? res : iter))
  }

  const undoVote = async () => {
    const res = await postService.undoVote(postId, iteration._id)
    setIterationsArr(iterationsArr.map((iter) => iter._id === iteration._id ? res : iter))
  }

  return (
    <div>
      {!voteArr.includes(user.profile)
        ? <>
            <button onClick={() => handleVote(1)}>UpVote</button>
            <button onClick={() => handleVote(-1)}>DownVote</button>
          </>
        : <button onClick={undoVote}>Undo Vote</button>
      }
    </div>
  )
}

export default VoteHandler