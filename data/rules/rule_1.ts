import type { Rule } from '../../types.ts';

export const rule1: Rule = {
  id: 1,
  name: "Rule 1: The General Rule",
  formula: "Singular Subject ➜ Verb + s/es | Plural/I/You ➜ Base Verb",
  explanation: "Singular subjects in the third person (she, he, it, singular nouns) require verbs ending in -s in present tense. Plural subjects, I, or You take the base form of the verb.",
  examples: [
    {
      sentence: "She walks to school every day.",
      subject: "She",
      verb: "walks",
      reason: "'She' is a singular, third-person pronoun, so the verb 'walks' needs an '-s' ending."
    },
    {
      sentence: "The cat runs across the yard.",
      subject: "The cat",
      verb: "runs",
      reason: "'The cat' is a singular subject, so the verb 'runs' ends in '-s'."
    },
    {
      sentence: "David writes novels for a living.",
      subject: "David",
      verb: "writes",
      reason: "A proper noun like 'David' is a singular, third-person subject, requiring the verb 'writes'."
    },
    {
      sentence: "They run every day.",
      subject: "They",
      verb: "run",
      reason: "'They' is a plural subject, so it takes the base form of the verb, 'run'."
    },
    {
      sentence: "I run to the store.",
      subject: "I",
      verb: "run",
      reason: "The first-person pronoun 'I' takes the base form of the verb, 'run'."
    },
    {
      sentence: "You walk quickly.",
      subject: "You",
      verb: "walk",
      reason: "The second-person pronoun 'You' takes the base form of the verb, 'walk'."
    },
    {
      sentence: "The earth goes round the sun.",
      subject: "The earth",
      verb: "goes",
      reason: "'The earth' is a singular subject, so the verb 'goes' needs an '-es' ending."
    },
    {
      sentence: "My sister teaches.",
      subject: "My sister",
      verb: "teaches",
      reason: "'My sister' is a singular, third-person subject, so the verb 'teaches' needs an '-es' ending."
    },
    {
      sentence: "Nurses look after patients.",
      subject: "Nurses",
      verb: "look",
      reason: "'Nurses' is a plural subject, so it takes the base form of the verb, 'look'."
    }
  ]
};