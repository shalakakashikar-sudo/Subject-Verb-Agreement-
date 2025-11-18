
import type { Rule } from '../../types.ts';

export const rule16: Rule = {
  id: 16,
  name: "Rule 16: Paired Items",
  formula: "Paired Noun ➜ Plural | 'A pair of' ➜ Singular",
  explanation: "Nouns for things with two parts (scissors, trousers) are plural. However, 'a pair of' makes the subject singular.",
  examples: [
    {
      sentence: "My glasses are broken.",
      subject: "My glasses",
      verb: "are",
      reason: "'Glasses' is a plural noun."
    },
    {
      sentence: "A pair of glasses is on the table.",
      subject: "A pair",
      verb: "is",
      reason: "'Pair' is a singular noun."
    },
    {
      sentence: "These scissors are sharp.",
      subject: "These scissors",
      verb: "are",
      reason: "'Scissors' is a plural noun."
    }
  ]
};
