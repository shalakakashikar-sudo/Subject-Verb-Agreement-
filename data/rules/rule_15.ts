import type { Rule } from '../../types.ts';

export const rule15: Rule = {
  id: 15,
  name: "Rule 15: Nouns Plural in Form but Singular in Meaning",
  formula: "Noun (news, physics, measles...) ➜ Singular Verb",
  explanation: "Names of academic subjects, diseases, the word news, and words like series and species end in -s but are grammatically singular.",
  examples: [
    {
        sentence: "The news is on at six.",
        subject: "news",
        verb: "is",
        reason: "The noun 'news' is always singular, even though it ends in '-s', so it takes the singular verb 'is'."
    },
    {
        sentence: "Mumps is a contagious disease.",
        subject: "Mumps",
        verb: "is",
        reason: "Names of diseases that end in '-s', like 'Mumps', are treated as singular."
    },
    {
        sentence: "Economics is her favorite subject.",
        subject: "Economics",
        verb: "is",
        reason: "Names of academic subjects like 'Economics' are singular and require a singular verb like 'is'."
    },
    {
        sentence: "Physics is a fascinating subject.",
        subject: "Physics",
        verb: "is",
        reason: "'Physics', a field of study, is a singular noun and takes the singular verb 'is'."
    },
    {
        sentence: "Mathematics is difficult.",
        subject: "Mathematics",
        verb: "is",
        reason: "Although it ends in '-s', 'Mathematics' is a single subject and requires the singular verb 'is'."
    },
    {
        sentence: "This series of events is important.",
        subject: "series",
        verb: "is",
        reason: "The word 'series' is singular in this context, referring to one sequence, so it takes the singular verb 'is'."
    },
    {
        sentence: "The new species was discovered recently.",
        subject: "species",
        verb: "was",
        reason: "'Species' can be singular or plural, but here it refers to one type, so the singular verb 'was' is correct."
    }
  ]
};