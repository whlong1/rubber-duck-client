import { isTextWordy } from './lib/too-wordy/too-wordy'
import { clichesMatcher } from './lib/no-cliches/cliches'
import { checkPassive } from './lib/passive-voice/passive'
import { matchAdverbs } from './lib/adverb-where/adverbs'
import { checkWeaselWords } from './lib/weasel/weasel'

import { startsWithSo } from './lib/startsWithSo'
import { lexicalIllusions } from './lib/lexicalIllustions'
import { startsWithThereIs } from './lib/startsWithThereIs'

import { considerOmit } from './custom/omit'
import { checkObvious } from './custom/obvious'
import { checkProfanity } from './custom/profanity'
import { checkAssumptions } from './custom/assumptions'

const defaultChecks = {
  so: {
    severity: 1,
    color: 'warning',
    fn: startsWithSo,
    explanation: 'adds no meaning',
  },
  cliches: {
    severity: 1,
    color: 'warning',
    fn: clichesMatcher,
    explanation: 'is a cliche',
  },
  illusion: {
    severity: 2,
    color: 'error',
    fn: lexicalIllusions,
    explanation: 'is repeated',
  },
  adverb: {
    severity: 1,
    color: 'warning',
    fn: matchAdverbs,
    explanation: 'can weaken meaning',
  },
  weasel: {
    severity: 1,
    color: 'warning',
    fn: checkWeaselWords,
    explanation: 'is a weasel word',
  },
  passive: {
    severity: 1,
    color: 'warning',
    fn: checkPassive,
    explanation: 'may be passive voice',
  },
  tooWordy: {
    severity: 2,
    color: 'error',
    fn: isTextWordy,
    explanation: 'is wordy or unneeded',
  },
  thereIs: {
    fn: startsWithThereIs,
    explanation: 'is unnecessary verbiage',
    severity: 1,
    color: 'warning',
  },
  assumptions: {
    severity: 1,
    color: 'warning',
    fn: checkAssumptions,
    explanation: 'Try to avoid making assumptions.',
  },
  profanity: {
    severity: 2,
    color: 'error',
    fn: checkProfanity,
    explanation: 'Please avoid using fowl language.',
  },
  omit: {
    severity: 1,
    color: 'warning',
    fn: considerOmit,
    explanation: 'Consider omitting this word.',
  },
  obvious: {
    severity: 1,
    color: 'warning',
    fn: checkObvious,
    explanation: 'Not everything is as obvious as you might think.',
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
        // suggestion covers entire whitelist term
        suggestionFrom <= slice.from && suggestionTo >= slice.to
      ) || (
          // suggestion starts within whitelist term
          suggestionFrom >= slice.from && suggestionFrom <= slice.to
        ) || (
          // suggestion ends within whitelist term
          suggestionTo >= slice.from && suggestionTo <= slice.to
        )
    })) { memo.push(suggestion) }
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

function makeSuggestion(text, check) {
  // finalChecks[checkName].explanation
  return function reasonableSuggestion(suggestion) {
    // eslint-disable-next-line no-param-reassign
    suggestion.color = check.color
    suggestion.severity = check.severity
    suggestion.reason = `"${text.substr(suggestion.index, suggestion.offset)}" ${check.explanation}`
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
          .map(makeSuggestion(text, finalChecks[checkName]))
      )
    }
  })

  const filtered = filter(text, suggestions, opts.whitelist)
  return dedup(filtered).sort((a, b) => (a.index < b.index ? -1 : 1))
}

export {
  writeGood
}