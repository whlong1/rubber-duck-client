import { useState, useEffect } from 'react'
import writeGood from 'write-good'

// Components
import Feedback from './components/Feedback'

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
      <Feedback tips={tips} warnings={warnings} wordCount={wordCount} keywords={keywords} />
    </div>
  )
}

export default Analysis