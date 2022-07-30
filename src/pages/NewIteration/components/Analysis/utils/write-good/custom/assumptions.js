export function checkAssumptions(text) {
  const suggestions = []
  const positives = ['Everyone knows', 'Everybody knows', 'As we all know', 'Easily', 'Easy', 'Assuming']
  const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
  const match = regex.exec(text)
  if (match) {
    suggestions.push({ index: match.index, offset: match[0].length, })
  }
  return suggestions
}