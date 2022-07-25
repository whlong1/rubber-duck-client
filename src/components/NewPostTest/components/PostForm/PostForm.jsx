function PostForm({ text, setText, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <textarea
        required
        name="text"
        type="text"
        value={text}
        spellCheck="true"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm