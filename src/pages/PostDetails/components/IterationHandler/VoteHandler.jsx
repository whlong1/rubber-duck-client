import * as postService from '../../../../services/postService'

const VoteHandler = ({ postId, iterationsArr, setIterationsArr, iteration }) => {

  console.log(iteration)

  const handleVote = async (vote) => {
    const res = await postService.castVote(postId, iteration._id, vote)
    console.log(res)
    setIterationsArr(iterationsArr.map((iter) => (
      iter._id === iteration._id
        ? res
        : iter
    )))
  }

  return (
    <div>
      <button onClick={() => handleVote(1)}>UpVote</button>
      <button onClick={() => handleVote(-1)}>DownVote</button>
    </div>
  )
}

export default VoteHandler