
import type { Rule } from '../../types.ts';

export const rule17: Rule = {
  id: 17,
  name: "Rule 17: Relative Pronouns and Antecedents",
  formula: "Antecedent + who/that ➜ Verb agrees with Antecedent",
  explanation: "The verb in a relative clause must agree with the antecedent (the word the pronoun refers to).",
  examples: [
    {
      sentence: "He is the one who helps me.",
      subject: "who",
      verb: "helps",
      reason: "'Who' refers to 'one' (singular)."
    },
    {
      sentence: "We are the people who help you.",
      subject: "who",
      verb: "help",
      reason: "'Who' refers to 'people' (plural)."
    },
    {
      sentence: "It is I who am sorry.",
      subject: "who",
      verb: "am",
      reason: "'Who' refers to 'I'."
    }
  ]
};
