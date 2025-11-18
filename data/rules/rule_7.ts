
import type { Rule } from '../../types.ts';

export const rule7: Rule = {
  id: 7,
  name: "Rule 7: Ignoring Intervening Phrases",
  formula: "Main Subject ... (phrase) ... ➜ Verb agrees with Main Subject",
  explanation: "Phrases between the subject and verb (prepositional phrases, clarifying information) must be ignored. The verb agrees only with the main subject.",
  examples: [
    {
      sentence: "The box of chocolates is empty.",
      subject: "The box",
      verb: "is",
      reason: "The main subject is 'The box' (singular). The phrase 'of chocolates' is ignored."
    },
    {
      sentence: "The colors of the rainbow are beautiful.",
      subject: "The colors",
      verb: "are",
      reason: "The main subject is 'The colors' (plural), so the verb is 'are'."
    },
    {
      sentence: "The man with the dogs walks quickly.",
      subject: "The man",
      verb: "walks",
      reason: "The singular subject 'The man' determines the verb 'walks', ignoring the intervening phrase."
    }
  ]
};
