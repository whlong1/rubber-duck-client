import { isTextWordy } from './tooWordy'
import { clichesMatcher } from './noCliches'
import { checkPassive } from './passiveVoice'
import { matchAdverbs } from './adverbsWhere'
import { checkWeaselWords } from './weaselWords'

import { startsWithSo } from './lib/startsWithSo'
import { lexicalIllusions } from './lib/lexicalIllustions'
import { startsWithThereIs } from './lib/startsWithThereIs'

import { omit } from './writeGood/lib/custom/omit'
import { obvious } from './writeGood/lib/custom/obvious'
import { profanity } from './writeGood/lib/custom/profanity'
import { assumptions } from './writeGood/lib/custom/assumptions'

const defaultChecks = {
  so: { fn: startsWithSo, explanation: 'adds no meaning' },
  cliches: { fn: clichesMatcher, explanation: 'is a cliche' },
  illusion: { fn: lexicalIllusions, explanation: 'is repeated' },
  adverb: { fn: matchAdverbs, explanation: 'can weaken meaning' },
  weasel: { fn: checkWeaselWords, explanation: 'is a weasel word' },
  passive: { fn: checkPassive, explanation: 'may be passive voice' },
  tooWordy: { fn: isTextWordy, explanation: 'is wordy or unneeded' },
  thereIs: { fn: startsWithThereIs, explanation: 'is unnecessary verbiage' },
  assumptions: {
    fn: assumptions,
    explanation: 'Try to avoid making assumptions.'
  },
  profanity: {
    fn: profanity,
    explanation: 'Please avoid using fowl language.'
  },
  omit: {
    fn: omit,
    explanation: 'Consider omitting this word.'
  },
  obvious: {
    fn: obvious,
    explanation: 'Not everything is as obvious as you might think.'
  },
}

function filter(text, suggestions, whitelistTerms = []) {
  const whitelistSlices = whitelistTerms.reduce((memo, term) => {
    let index = text.indexOf(term);
    while (index > 0) {
      memo.push({ from: index, to: index + term.length })
      index = text.indexOf(term, index + 1)
    }
    return memo
  }, [])

  return suggestions.reduce((memo, suggestion) => {
    if (!whitelistSlices.find((slice) => {
      const suggestionFrom = suggestion.index;
      const suggestionTo = suggestion.index + suggestion.offset;
      return (
        suggestionFrom <= slice.from && suggestionTo >= slice.to
        || suggestionFrom >= slice.from && suggestionFrom <= slice.to
        || suggestionTo >= slice.from && suggestionTo <= slice.to
      )
    })) {
      memo.push(suggestion)
    }
    return memo
  }, [])
}

function dedup(suggestions) {
  const dupsHash = {}
  return suggestions.reduce((memo, suggestion) => {
    const key = `${suggestion.index}:${suggestion.offset}`
    if (!dupsHash[key]) {
      dupsHash[key] = suggestion
      memo.push(suggestion)
    } else {
      dupsHash[key].reason += ` and ${suggestion.reason.substring(suggestion.offset + 3)}`
    }
    return memo
  }, [])
}

function reasonable(text, reason) {
  return function reasonableSuggestion(suggestion) {
    // eslint-disable-next-line no-param-reassign
    suggestion.reason = `"${text.substr(suggestion.index, suggestion.offset)}" ${reason}`
    return suggestion
  }
}

function writeGood(text, opts = {}) {
  const finalOpts = {}
  const defaultOpts = Object.assign({}, opts)
  Object.keys(defaultOpts).forEach((optKey) => {
    if (optKey !== 'checks') {
      finalOpts[optKey] = defaultOpts[optKey]
    }
  })

  let suggestions = []
  const finalChecks = opts.checks || defaultChecks
  Object.keys(finalChecks).forEach((checkName) => {
    if (finalOpts[checkName] !== false) {
      suggestions = suggestions.concat(
        finalChecks[checkName]
          .fn(text)
          .map(reasonable(text, finalChecks[checkName].explanation))
      )
    }
  })

  const filtered = filter(text, suggestions, opts.whitelist)
  return dedup(filtered).sort((a, b) => (a.index < b.index ? -1 : 1))
}

export {
  writeGood
}