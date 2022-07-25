import Note from './Note'

function Feedback({ tips, warnings, wordCount }) {
  return (
    <div>
      {tips.map((note, idx) => (
        <Note color='#52b775' key={idx} note={note} />
      ))}
      {warnings.map((note, idx) => (
        <Note color='#e36350' key={idx} note={note} />
      ))}
      <p>{wordCount}</p>
    </div>
  )
}

export default Feedback