
import type { Rule } from '../../types.ts';

export const rule20: Rule = {
  id: 20,
  name: "Rule 20: A Number vs The Number",
  formula: "'A number' ➜ Plural | 'The number' ➜ Singular",
  explanation: "'A number of' implies 'many' and is plural. 'The number of' implies a specific count and is singular.",
  examples: [
    {
      sentence: "A number of students are absent.",
      subject: "A number",
      verb: "are",
      reason: "'A number' means many (plural)."
    },
    {
      sentence: "The number of students is decreasing.",
      subject: "The number",
      verb: "is",
      reason: "'The number' refers to the count itself (singular)."
    }
  ]
};
