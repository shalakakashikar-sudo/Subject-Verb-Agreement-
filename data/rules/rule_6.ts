
import type { Rule } from '../../types.ts';

export const rule6: Rule = {
  id: 6,
  name: "Rule 6: Correlative Conjunctions - Proximity Rule",
  formula: "S1 or/nor S2 ➜ Verb agrees with S2 (nearest)",
  explanation: "When subjects are joined by or, nor, either...or, neither...nor, the verb agrees with the subject element physically closest to it. This applies regardless of which subject is singular or plural.",
  examples: [
    {
      sentence: "Neither the students nor the teacher is ready.",
      subject: "the teacher",
      verb: "is",
      reason: "The verb 'is' agrees with the closest subject, 'the teacher' (singular)."
    },
    {
      sentence: "Neither the teacher nor the students are ready.",
      subject: "the students",
      verb: "are",
      reason: "The verb 'are' agrees with the closest subject, 'the students' (plural)."
    },
    {
      sentence: "Either the cat or the dogs have eaten the food.",
      subject: "the dogs",
      verb: "have",
      reason: "The verb 'have' agrees with the plural subject 'the dogs', which is closer."
    }
  ]
};
