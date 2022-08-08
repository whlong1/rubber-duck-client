const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <p key={comment._id}>
          {comment.author.name}
          -
          {comment.text}
        </p>
      ))}
    </div>
  )
}

export default CommentList