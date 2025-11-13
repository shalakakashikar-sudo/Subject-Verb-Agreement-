import type { Rule } from '../../types.ts';

export const rule10: Rule = {
  id: 10,
  name: "Rule 10: Singular Indefinite Pronouns",
  formula: "Indefinite Pronoun (-one, -body, -thing) ➜ Singular Verb",
  explanation: "Indefinite pronouns are grammatically singular and always require singular verbs. This applies to pronouns ending in -one, -body, or -thing, as well as several others. The list includes: another, anybody, anyone, anything, each, either, everybody, everyone, everything, neither, nobody, no one, nothing, one, somebody, someone, and something.",
  examples: [
    {
        sentence: "Everyone has a book.",
        subject: "Everyone",
        verb: "has",
        reason: "The indefinite pronoun 'Everyone' is always singular and requires the singular verb 'has'."
    },
    {
        sentence: "Each of the students has a locker.",
        subject: "Each",
        verb: "has",
        reason: "'Each' is a singular indefinite pronoun, so it takes the singular verb 'has'."
    },
    {
        sentence: "Nobody knows the answer.",
        subject: "Nobody",
        verb: "knows",
        reason: "Pronouns ending in '-body', like 'Nobody', are singular and take a singular verb, 'knows'."
    },
    {
        sentence: "Somebody is at the door.",
        subject: "Somebody",
        verb: "is",
        reason: "'Somebody' is a singular indefinite pronoun, requiring the singular verb 'is'."
    },
    {
        sentence: "Everything comes back eventually.",
        subject: "Everything",
        verb: "comes",
        reason: "Pronouns ending in '-thing', like 'Everything', are singular and need a singular verb, 'comes'."
    },
    {
        sentence: "Either of the options is acceptable.",
        subject: "Either",
        verb: "is",
        reason: "'Either' as a pronoun is singular and takes the singular verb 'is'."
    },
    {
        sentence: "Anyone who tries deserves recognition.",
        subject: "Anyone",
        verb: "deserves",
        reason: "The indefinite pronoun 'Anyone' is singular, so the verb is 'deserves'."
    }
  ]
};