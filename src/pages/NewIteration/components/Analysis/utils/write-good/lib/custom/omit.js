export function omit(text) {
  const suggestions = []
  const positives = ['Basically', 'Basic', 'Simply', 'Simple', 'Just']
  const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
  const match = regex.exec(text)
  if (match) {
    suggestions.push({ index: match.index, offset: match[0].length, })
  }
  return suggestions
}