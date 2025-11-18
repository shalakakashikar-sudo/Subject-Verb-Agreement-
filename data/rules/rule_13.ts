
import type { Rule } from '../../types.ts';

export const rule13: Rule = {
  id: 13,
  name: "Rule 13: Verbal Phrases and Gerunds",
  formula: "Gerund/Infinitive (as subject) ➜ Singular Verb",
  explanation: "A gerund (verb + ing) or infinitive (to + verb) acting as a subject is treated as a singular noun.",
  examples: [
    {
      sentence: "Swimming is fun.",
      subject: "Swimming",
      verb: "is",
      reason: "The gerund 'Swimming' is a singular subject."
    },
    {
      sentence: "To err is human.",
      subject: "To err",
      verb: "is",
      reason: "The infinitive 'To err' is a singular subject."
    },
    {
      sentence: "Reading books expands your mind.",
      subject: "Reading books",
      verb: "expands",
      reason: "The subject is the act of 'Reading' (singular), not 'books'."
    }
  ]
};
