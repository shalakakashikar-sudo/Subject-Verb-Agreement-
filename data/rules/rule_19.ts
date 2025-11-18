
import type { Rule } from '../../types.ts';

export const rule19: Rule = {
  id: 19,
  name: "Rule 19: Formal Inversion",
  formula: "Negative Adverb + Aux + Subject ➜ Verb agrees with Subject",
  explanation: "When a sentence starts with a negative adverb (Never, Rarely), the subject and auxiliary verb are inverted. The verb must still agree with the subject.",
  examples: [
    {
      sentence: "Rarely have I seen such beauty.",
      subject: "I",
      verb: "have",
      reason: "Inverted structure: 'have' agrees with 'I'."
    },
    {
      sentence: "Never does he miss a class.",
      subject: "he",
      verb: "does",
      reason: "Inverted structure: 'does' agrees with 'he'."
    },
    {
      sentence: "Seldom do they complain.",
      subject: "they",
      verb: "do",
      reason: "Inverted structure: 'do' agrees with 'they'."
    }
  ]
};
