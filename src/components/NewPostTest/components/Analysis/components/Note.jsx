function Note({ note, color }) {
  return (
    <p style={{ color: color }}>{note.reason}</p>
  )
}

export default Note