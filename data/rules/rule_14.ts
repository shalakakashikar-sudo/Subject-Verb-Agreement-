import type { Rule } from '../../types.ts';

export const rule14: Rule = {
  id: 14,
  name: "Rule 14: Measurements, Time, and Money as Units",
  formula: "Measurement/Time/Money (as one unit) ➜ Singular Verb",
  explanation: "When expressions of distance, money, time, or weight are considered as a total quantity or single conceptual unit, they require a singular verb.",
  examples: [
    {
        sentence: "Ten dollars is a high price to pay.",
        subject: "Ten dollars",
        verb: "is",
        reason: "The amount 'Ten dollars' is treated as a single sum of money, a singular unit, so it takes the singular verb 'is'."
    },
    {
        sentence: "Five years is the maximum sentence.",
        subject: "Five years",
        verb: "is",
        reason: "The period 'Five years' is considered a single duration, so it requires the singular verb 'is'."
    },
    {
        sentence: "Fifty pounds seems like a lot to carry.",
        subject: "Fifty pounds",
        verb: "seems",
        reason: "The weight 'Fifty pounds' is considered a single, collective amount, so it takes the singular verb 'seems'."
    },
    {
        sentence: "Ten minutes is enough time.",
        subject: "Ten minutes",
        verb: "is",
        reason: "'Ten minutes' is treated as a single block of time, making it a singular subject that takes the verb 'is'."
    },
    {
        sentence: "1267 kilometres is too long to travel.",
        subject: "1267 kilometres",
        verb: "is",
        reason: "The total distance '1267 kilometres' is a single measurement, requiring the singular verb 'is'."
    },
    {
        sentence: "Four quarts of oil was required.",
        subject: "Four quarts",
        verb: "was",
        reason: "The measurement 'Four quarts' is considered a single quantity, so the singular verb 'was' is used."
    }
  ]
};