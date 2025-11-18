
import type { Rule } from '../../types.ts';

export const rule18: Rule = {
  id: 18,
  name: "Rule 18: The Subjunctive Mood",
  formula: "If / I wish + Subject ➜ were",
  explanation: "Use 'were' instead of 'was' for singular subjects in hypothetical or contrary-to-fact situations.",
  examples: [
    {
      sentence: "If I were you, I would accept.",
      subject: "I",
      verb: "were",
      reason: "Hypothetical situation requires subjunctive."
    },
    {
      sentence: "I wish he were here.",
      subject: "he",
      verb: "were",
      reason: "Wish statement requires subjunctive."
    },
    {
      sentence: "She acts as if she were the boss.",
      subject: "she",
      verb: "were",
      reason: "Contrary-to-fact condition."
    }
  ]
};
