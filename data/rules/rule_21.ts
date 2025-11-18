
import type { Rule } from '../../types.ts';

export const rule21: Rule = {
  id: 21,
  name: "Rule 21: Nominal Clauses",
  formula: "Clause as Subject ➜ Singular Verb",
  explanation: "When a noun clause (starting with what, how, that) acts as the subject, it is treated as singular.",
  examples: [
    {
      sentence: "What you said is true.",
      subject: "What you said",
      verb: "is",
      reason: "The clause is a single concept (singular)."
    },
    {
      sentence: "How he escaped remains a mystery.",
      subject: "How he escaped",
      verb: "remains",
      reason: "The clause is the subject."
    },
    {
      sentence: "That he lied was obvious.",
      subject: "That he lied",
      verb: "was",
      reason: "The clause is the subject."
    }
  ]
};
