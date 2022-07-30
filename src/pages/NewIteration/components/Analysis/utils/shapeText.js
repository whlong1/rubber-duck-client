export const shapeText = (string) => {
  let caughtWord = string.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "")
  return [caughtWord, string.slice(caughtWord.length + 3)]
}