import type { Rule } from '../../types.ts';

export const rule6: Rule = {
  id: 6,
  name: "Rule 6: Correlative Conjunctions - Proximity Rule (OR/NOR)",
  formula: "S1 or/nor S2 ➜ Verb agrees with S2 (nearest)",
  explanation: "When subjects are joined by or, nor, either...or, neither...nor, the verb agrees with the subject element physically closest to it. This applies regardless of which subject is singular or plural.",
  examples: [
    {
        sentence: "Neither the students nor the professor wants to reschedule.",
        subject: "the professor",
        verb: "wants",
        reason: "With 'neither...nor', the verb 'wants' agrees with the closest subject, which is the singular 'professor'."
    },
    {
        sentence: "Neither the professor nor the students want to reschedule.",
        subject: "the students",
        verb: "want",
        reason: "According to the proximity rule, the verb 'want' agrees with the nearer subject, the plural 'students'."
    },
    {
        sentence: "Either my shoes or your coat is always on the floor.",
        subject: "your coat",
        verb: "is",
        reason: "The verb 'is' agrees with the singular subject 'coat', which is closer to it than the plural subject 'shoes'."
    },
    {
        sentence: "The boy or his friends run every day.",
        subject: "his friends",
        verb: "run",
        reason: "When using 'or', the verb 'run' agrees with the closest subject, 'his friends', which is plural."
    },
    {
        sentence: "Either the Mayor or her deputy is bound to come.",
        subject: "her deputy",
        verb: "is",
        reason: "With 'either...or', the verb 'is' agrees with the nearer subject, the singular 'her deputy'."
    },
    {
        sentence: "Not Bob but his brothers walk to the store.",
        subject: "his brothers",
        verb: "walk",
        reason: "The verb 'walk' agrees with the subject closest to it, 'his brothers' (plural)."
    },
    {
        sentence: "Not Bob but his brother walks to the store.",
        subject: "his brother",
        verb: "walks",
        reason: "The verb 'walks' agrees with the singular subject 'his brother', which is closer to it."
    }
  ]
};