const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <p>
          {comment.author.name}
          -
          {comment.text}
        </p>
      ))}
    </div>
  )
}

export default CommentList