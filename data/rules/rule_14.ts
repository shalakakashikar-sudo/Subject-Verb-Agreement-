
import type { Rule } from '../../types.ts';

export const rule14: Rule = {
  id: 14,
  name: "Rule 14: Measurements, Time, and Money",
  formula: "Measurement/Time/Money (as unit) ➜ Singular Verb",
  explanation: "Expressions of time, money, and distance are usually treated as singular units.",
  examples: [
    {
      sentence: "Ten dollars is a fair price.",
      subject: "Ten dollars",
      verb: "is",
      reason: "The money is treated as a single sum."
    },
    {
      sentence: "Five miles is a long walk.",
      subject: "Five miles",
      verb: "is",
      reason: "The distance is treated as a single unit."
    },
    {
      sentence: "Two hours was enough time.",
      subject: "Two hours",
      verb: "was",
      reason: "The time period is treated as a single unit."
    }
  ]
};
