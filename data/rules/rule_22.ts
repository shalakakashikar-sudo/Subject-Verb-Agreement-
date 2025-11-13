import type { Rule } from '../../types.ts';

export const rule22: Rule = {
  id: 22,
  name: "Rule 22: Agreement of Person",
  formula: "It is I who... ➜ am | It is You who... ➜ are | It is He who... ➜ is",
  explanation: "The verb must agree in person with its antecedent. When the antecedent is I, use am. When it's you, use are. When it's he/she, use is.",
  examples: [
    {
        sentence: "It is I who am responsible.",
        subject: "who",
        verb: "am",
        reason: "The verb 'am' agrees in person with its antecedent, 'I' (first-person singular)."
    },
    {
        sentence: "I who am your friend should stand by you.",
        subject: "who",
        verb: "am",
        reason: "The verb in the relative clause, 'am', agrees with the antecedent 'I'."
    },
    {
        sentence: "It is you who are making the difference.",
        subject: "who",
        verb: "are",
        reason: "The verb 'are' agrees with the second-person antecedent 'you'."
    },
    {
        sentence: "It is they who are to blame.",
        subject: "who",
        verb: "are",
        reason: "The verb 'are' agrees with the plural antecedent 'they'."
    },
    {
        sentence: "It is you who need to finish the work.",
        subject: "who",
        verb: "need",
        reason: "The verb 'need' agrees with the antecedent 'you', which takes the base form of the verb."
    },
    {
        sentence: "It is he who is responsible.",
        subject: "who",
        verb: "is",
        reason: "The verb 'is' agrees with the third-person singular antecedent 'he'."
    }
  ]
};