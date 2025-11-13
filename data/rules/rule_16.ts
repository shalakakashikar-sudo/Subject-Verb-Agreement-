import type { Rule } from '../../types.ts';

export const rule16: Rule = {
  id: 16,
  name: "Rule 16: Paired Items",
  formula: "Paired Noun (scissors, trousers) ➜ Plural Verb | 'A pair of' + Noun ➜ Singular Verb",
  explanation: "Nouns for things in two parts are inherently plural. EXCEPTION: When a pair of precedes these nouns, pair becomes the subject.",
  examples: [
    {
        sentence: "These scissors are dull.",
        subject: "scissors",
        verb: "are",
        reason: "Nouns for paired items like 'scissors' are treated as plural and take a plural verb like 'are'."
    },
    {
        sentence: "The pliers are in the toolbox.",
        subject: "pliers",
        verb: "are",
        reason: "'Pliers' is a plural noun because it consists of two parts, requiring the plural verb 'are'."
    },
    {
        sentence: "My trousers are too long.",
        subject: "trousers",
        verb: "are",
        reason: "'Trousers' is a plural noun representing a single item with two parts, so it requires the plural verb 'are'."
    },
    {
        sentence: "My glasses are on the table.",
        subject: "glasses",
        verb: "are",
        reason: "'Glasses' is an inherently plural noun and takes the plural verb 'are'."
    },
    {
        sentence: "A pair of scissors is missing.",
        subject: "pair",
        verb: "is",
        reason: "The phrase 'a pair of' makes the subject 'pair' singular, so it requires the singular verb 'is'."
    },
    {
        sentence: "This pair of pliers is brand new.",
        subject: "pair",
        verb: "is",
        reason: "The true subject is the singular noun 'pair', so it requires the singular verb 'is'."
    },
    {
        sentence: "A pair of jeans is nice.",
        subject: "pair",
        verb: "is",
        reason: "The true subject is the singular noun 'pair', which requires the singular verb 'is'."
    },
    {
        sentence: "A pair of gloves was found.",
        subject: "pair",
        verb: "was",
        reason: "When 'a pair of' is used, the subject becomes 'pair' (singular), so the verb must be 'was'."
    }
  ]
};