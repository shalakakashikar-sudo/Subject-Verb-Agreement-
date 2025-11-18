
import type { Rule } from '../../types.ts';

export const rule11: Rule = {
  id: 11,
  name: "Rule 11: Flexible Quantifiers",
  formula: "Quantifier + Plural Noun ➜ Plural | Quantifier + Uncountable ➜ Singular",
  explanation: "For quantifiers like all, some, most, none, half, the verb agrees with the noun following the 'of'.",
  examples: [
    {
      sentence: "All of the cake is gone.",
      subject: "All",
      verb: "is",
      reason: "'Cake' is uncountable/singular, so 'All' is treated as singular."
    },
    {
      sentence: "All of the cookies are gone.",
      subject: "All",
      verb: "are",
      reason: "'Cookies' is plural, so 'All' is treated as plural."
    },
    {
      sentence: "Some of the water was spilled.",
      subject: "Some",
      verb: "was",
      reason: "'Water' is singular, requiring a singular verb."
    }
  ]
};
