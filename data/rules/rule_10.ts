
import type { Rule } from '../../types.ts';

export const rule10: Rule = {
  id: 10,
  name: "Rule 10: Singular Indefinite Pronouns",
  formula: "Indefinite Pronoun (-one, -body, -thing) ➜ Singular Verb",
  explanation: "Indefinite pronouns ending in -one, -body, or -thing (like everyone, somebody, anything) are always singular and take a singular verb.",
  examples: [
    {
      sentence: "Everyone is welcome.",
      subject: "Everyone",
      verb: "is",
      reason: "'Everyone' is a singular indefinite pronoun."
    },
    {
      sentence: "Something smells good.",
      subject: "Something",
      verb: "smells",
      reason: "'Something' is singular, so the verb has an '-s'."
    },
    {
      sentence: "Nobody knows the answer.",
      subject: "Nobody",
      verb: "knows",
      reason: "'Nobody' is always treated as singular."
    }
  ]
};
