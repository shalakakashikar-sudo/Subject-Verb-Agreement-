import type { Rule } from '../../types.ts';

export const rule7: Rule = {
  id: 7,
  name: "Rule 7: Ignoring Intervening Phrases",
  formula: "Main Subject ... (phrase) ... ➜ Verb agrees with Main Subject",
  explanation: "Phrases between the subject and verb (prepositional phrases, clarifying information) must be ignored. The verb agrees only with the main subject.",
  examples: [
    {
        sentence: "The list of rules is confusing.",
        subject: "list",
        verb: "is",
        reason: "The verb 'is' agrees with the main subject 'list' (singular), not the noun 'rules' in the prepositional phrase 'of rules'."
    },
    {
        sentence: "The sound of the bells is loud.",
        subject: "sound",
        verb: "is",
        reason: "The singular subject 'sound' determines the verb 'is', not the plural noun 'bells' in the intervening phrase."
    },
    {
        sentence: "The box of old letters, containing photographs from the war, was finally opened.",
        subject: "box",
        verb: "was",
        reason: "The true subject is 'box' (singular). The long phrase in the middle does not change the verb, which must be 'was'."
    },
    {
        sentence: "The bouquet of flowers was beautiful.",
        subject: "bouquet",
        verb: "was",
        reason: "The verb 'was' agrees with the singular subject 'bouquet', ignoring the phrase 'of flowers'."
    },
    {
        sentence: "One of the boxes is open.",
        subject: "One",
        verb: "is",
        reason: "The true subject is 'One', which is singular and requires the verb 'is'."
    },
    {
        sentence: "The woman with all the dogs walks down my street.",
        subject: "woman",
        verb: "walks",
        reason: "The singular subject 'woman' takes the verb 'walks'. The phrase 'with all the dogs' does not affect the verb."
    }
  ]
};