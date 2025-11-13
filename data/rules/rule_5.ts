import type { Rule } from '../../types.ts';

export const rule5: Rule = {
  id: 5,
  name: "Rule 5: Distributive Markers (Each/Every)",
  formula: "Each/Every + Subject(s) ➜ Singular Verb",
  explanation: "The words each and every make the subject focus on individual units, requiring a singular verb even when multiple nouns are joined by AND.",
  examples: [
    {
        sentence: "Every man and woman is required to check in.",
        subject: "Every man and woman",
        verb: "is",
        reason: "The word 'Every' makes the compound subject singular, requiring the singular verb 'is'."
    },
    {
        sentence: "Each dog and cat at the shelter is vaccinated.",
        subject: "Each dog and cat",
        verb: "is",
        reason: "The word 'Each' treats the subjects individually, making the overall subject singular and requiring the verb 'is'."
    },
    {
        sentence: "Each of the students has a locker.",
        subject: "Each",
        verb: "has",
        reason: "The pronoun 'Each' is the true subject and is always singular, so it takes the singular verb 'has'."
    },
     {
        sentence: "Each of the answers is correct.",
        subject: "Each",
        verb: "is",
        reason: "The true subject is 'Each', not 'answers'. 'Each' is singular, so the verb is 'is'."
    },
    {
        sentence: "Each senator and congressman was allocated two seats.",
        subject: "Each senator and congressman",
        verb: "was",
        reason: "'Each' makes the subject singular, even though two nouns are listed, so the singular verb 'was' is used."
    },
    {
        sentence: "Every adult and child was wearing a flag.",
        subject: "Every adult and child",
        verb: "was",
        reason: "'Every' makes the subject singular, requiring the singular verb 'was'."
    }
  ]
};