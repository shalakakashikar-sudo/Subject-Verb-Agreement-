
import type { Rule } from '../../types.ts';

export const rule15: Rule = {
  id: 15,
  name: "Rule 15: Nouns Plural in Form but Singular in Meaning",
  formula: "Noun (news, physics...) ➜ Singular Verb",
  explanation: "Certain nouns end in -s (news, mathematics, measles) but are singular in meaning and take singular verbs.",
  examples: [
    {
      sentence: "The news is interesting today.",
      subject: "The news",
      verb: "is",
      reason: "'News' is always singular."
    },
    {
      sentence: "Mathematics is my favorite subject.",
      subject: "Mathematics",
      verb: "is",
      reason: "Academic subjects ending in -s are singular."
    },
    {
      sentence: "Measles is a contagious disease.",
      subject: "Measles",
      verb: "is",
      reason: "Diseases ending in -s are often treated as singular."
    }
  ]
};
