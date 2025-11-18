
import type { Rule } from '../../types.ts';

export const rule12: Rule = {
  id: 12,
  name: "Rule 12: Collective Nouns",
  formula: "Collective Noun (as unit) ➜ Singular | (as individuals) ➜ Plural",
  explanation: "When a collective noun (team, family, committee) acts as a single unit, use a singular verb. When members act individually, use a plural verb.",
  examples: [
    {
      sentence: "The team is winning the game.",
      subject: "The team",
      verb: "is",
      reason: "The team is acting as a single unit."
    },
    {
      sentence: "The committee are arguing among themselves.",
      subject: "The committee",
      verb: "are",
      reason: "The members are acting as individuals (arguing), so the verb is plural."
    },
    {
      sentence: "My family has a reunion every year.",
      subject: "My family",
      verb: "has",
      reason: "The family acts as one unit."
    }
  ]
};
