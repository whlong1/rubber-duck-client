export function checkObvious(text) {
  const suggestions = []
  const positives = ['Obviously', 'Obvious', 'Of Course', 'Self Evident', 'Self-Evident', 'Clearly']
  const regex = new RegExp('\\b(' + positives.join('|') + ')\\b', 'gi')
  const match = regex.exec(text)
  if (match) {
    suggestions.push({ index: match.index, offset: match[0].length, })
  }
  return suggestions
}