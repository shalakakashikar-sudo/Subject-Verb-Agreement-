import type { Rule } from '../../types.ts';

export const rule21: Rule = {
  id: 21,
  name: "Rule 21: Nominal Relative Clauses",
  formula: "Noun Clause (what, how, etc.) as Subject ➜ Singular Verb",
  explanation: "A nominal relative clause or noun clause that functions as the subject is treated as one abstract, singular unit.",
  examples: [
    {
        sentence: "How you got there doesn't concern me.",
        subject: "How you got there",
        verb: "doesn't",
        reason: "The entire noun clause 'How you got there' acts as a single, abstract subject, requiring the singular verb 'doesn't'."
    },
    {
        sentence: "Whatever is best for the team is what we will do.",
        subject: "Whatever is best for the team",
        verb: "is",
        reason: "The noun clause acts as a singular subject, referring to one abstract idea, so it takes the singular verb 'is'."
    },
    {
        sentence: "Whatever book a Times reviewer praises sells well.",
        subject: "Whatever book a Times reviewer praises",
        verb: "sells",
        reason: "The noun clause is the subject of the sentence and is treated as singular, taking the verb 'sells'."
    },
    {
        sentence: "What I say or what I think is no business of yours.",
        subject: "What I say or what I think",
        verb: "is",
        reason: "The entire clause functions as a single idea and is therefore a singular subject, requiring the verb 'is'."
    },
    {
        sentence: "What was once a palace is now a pile of rubble.",
        subject: "What was once a palace",
        verb: "is",
        reason: "The clause 'What was once a palace' acts as a singular subject, so it takes the singular verb 'is'."
    },
    {
        sentence: "What ideas he has are his wife's.",
        subject: "What ideas he has",
        verb: "are",
        reason: "In this exception, the subject of the clause ('ideas') is clearly plural, so the verb 'are' is plural to match."
    }
  ]
};