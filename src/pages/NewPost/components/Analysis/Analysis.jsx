import { useState, useEffect } from 'react'
import writeGood from 'write-good'

// Utils
import { findWordCount, writingTips } from '../../utils/utils'

function Analysis({ text, keywords }) {
  const [tips, setTips] = useState([])
  const [warnings, setWarnings] = useState([])
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarnings(writeGood(text))
      setWordCount(findWordCount(text))
      setTips(writeGood(text, { checks: writingTips }))
    }, 1000)
    return () => clearTimeout(timer)
  }, [text])

  return (
    <div>
      Feedback:
      {tips.map((obj, idx) => (
        <p style={{ color: '#e36350' }}>{obj.reason}</p>
      ))}
      {warnings.map((obj, idx) => (
        <p style={{ color: '#e36350' }}>{obj.reason}</p>
      ))}
      {keywords.map((word, idx) => (
        <p style={{ color: '#e36350' }}>{word}</p>
      ))}
      <p>{wordCount}</p>
    </div>
  )
}

export default Analysis