import type { Rule } from '../../types.ts';

export const rule20: Rule = {
  id: 20,
  name: "Rule 20: A Number vs The Number",
  formula: "'A number of' ➜ Plural Verb | 'The number of' ➜ Singular Verb",
  explanation: "A number of means many and takes a plural verb. The number of refers to a single count and takes a singular verb.",
  examples: [
    {
        sentence: "A number of people have written in.",
        subject: "A number",
        verb: "have",
        reason: "The phrase 'A number of' is plural and means 'many', so it takes the plural verb 'have'."
    },
    {
        sentence: "The number of applicants is strictly limited.",
        subject: "The number",
        verb: "is",
        reason: "The phrase 'The number of' refers to a single figure and is always singular, requiring the verb 'is'."
    },
    {
        sentence: "A number of cars were parked outside.",
        subject: "A number",
        verb: "were",
        reason: "'A number of' functions as a plural subject, requiring the plural verb 'were'."
    },
    {
        sentence: "The number of cars parked outside was surprising.",
        subject: "The number",
        verb: "was",
        reason: "The subject is the singular phrase 'The number', so it requires the singular verb 'was'."
    },
    {
        sentence: "A number of tickets were sold yesterday.",
        subject: "A number",
        verb: "were",
        reason: "'A number of' acts as a plural quantifier, requiring the plural verb 'were'."
    },
    {
        sentence: "The number of problems was daunting.",
        subject: "The number",
        verb: "was",
        reason: "'The number of' is a singular subject, so it takes the singular verb 'was'."
    },
    {
        sentence: "A number of students have arrived late.",
        subject: "A number",
        verb: "have",
        reason: "The expression 'A number of' is always plural, so the verb is 'have'."
    },
    {
        sentence: "The number of attendees has reached one hundred.",
        subject: "The number",
        verb: "has",
        reason: "The subject is the singular phrase 'The number', which takes the singular verb 'has'."
    }
  ]
};