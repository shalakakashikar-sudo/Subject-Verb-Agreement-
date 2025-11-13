import type { Rule } from '../../types.ts';

export const rule9: Rule = {
  id: 9,
  name: "Rule 9: Inverted Sentences (There/Here)",
  formula: "There/Here + Verb ... ➜ Verb agrees with Real Subject",
  explanation: "In sentences starting with there or here, these words are never the subject. Find the true subject that follows the verb.",
  examples: [
    {
        sentence: "There is a book on the table.",
        subject: "a book",
        verb: "is",
        reason: "In sentences starting with 'There', the verb 'is' agrees with the true subject 'a book' (singular), which follows it."
    },
    {
        sentence: "There was an earthquake.",
        subject: "an earthquake",
        verb: "was",
        reason: "The verb 'was' agrees with the singular subject 'an earthquake' that comes after it."
    },
    {
        sentence: "There are many problems.",
        subject: "many problems",
        verb: "are",
        reason: "The verb 'are' agrees with the plural subject 'many problems' that follows it."
    },
    {
        sentence: "There seem to be several reasons for the delay.",
        subject: "several reasons",
        verb: "seem",
        reason: "The verb 'seem' is plural because it agrees with the true subject, 'several reasons'."
    },
    {
        sentence: "There are several movies running.",
        subject: "several movies",
        verb: "are",
        reason: "The plural verb 'are' is used because the true subject, 'several movies', is plural."
    },
    {
        sentence: "Here are the papers you requested.",
        subject: "the papers",
        verb: "are",
        reason: "In sentences starting with 'Here', the verb 'are' agrees with the subject 'the papers' (plural), which follows it."
    }
  ]
};