export const findWordCount = (string) => string.replace(/[^\w\s']|_/g, "").replace(/\s+/g, " ").split(' ').length

export const writingTips = {
  obvious: {
    fn: function (text) {
      const suggestions = []
      const positives = ['Obviously', 'Obvious', 'Of Course', 'Self Evident', 'Self-Evident', 'Clearly']
      const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
      const match = regex.exec(text)
      if (match) {
        suggestions.push({ index: match.index, offset: match[0].length, })
      }
      return suggestions
    },
    explanation: 'Not everything is as obvious as you might think.'
  },
  omit: {
    fn: function (text) {
      const suggestions = []
      const positives = ['Basically', 'Basic', 'Simply', 'Simple', 'Just']
      const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
      const match = regex.exec(text)
      if (match) {
        suggestions.push({ index: match.index, offset: match[0].length, })
      }
      return suggestions
    },
    explanation: 'Consider omitting this word.'
  },
  assumptions: {
    fn: function (text) {
      const suggestions = []
      const positives = ['Everyone knows', 'Everybody knows', 'As we all know', 'Easily', 'Easy', 'Assuming']
      const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
      const match = regex.exec(text)
      if (match) {
        suggestions.push({ index: match.index, offset: match[0].length, })
      }
      return suggestions
    },
    explanation: 'Try to avoid making assumptions.'
  },
  profanity: {
    fn: function (text) {
      const suggestions = []
      const positives = ['Fuck', 'Shit', 'Ass', 'Bitch']
      const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
      const match = regex.exec(text)
      if (match) {
        suggestions.push({ index: match.index, offset: match[0].length, })
      }
      return suggestions
    },
    explanation: 'Please avoid using fowl language.'
  },
}