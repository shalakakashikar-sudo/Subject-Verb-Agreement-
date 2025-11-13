import type { Rule } from '../../types.ts';

export const rule17: Rule = {
  id: 17,
  name: "Rule 17: Relative Pronouns and Antecedents",
  formula: "...Antecedent + who/that... ➜ Verb agrees with Antecedent",
  explanation: "When a relative pronoun is the subject of its clause, the verb must agree with the noun/pronoun it refers to (the antecedent).",
  examples: [
    {
        sentence: "The cat that jumps on furniture is playful.",
        subject: "that",
        verb: "jumps",
        reason: "The relative pronoun 'that' refers to its antecedent 'cat' (singular), so the verb in the clause is 'jumps'."
    },
    {
        sentence: "Salma is the scientist who writes the reports.",
        subject: "who",
        verb: "writes",
        reason: "The verb 'writes' agrees with the antecedent 'scientist' (singular), which the relative pronoun 'who' refers to."
    },
    {
        sentence: "It is I who am responsible.",
        subject: "who",
        verb: "am",
        reason: "The relative pronoun 'who' refers to 'I', so the verb must be 'am' to agree with the first-person singular antecedent."
    },
    {
        sentence: "The students who study hard succeed.",
        subject: "who",
        verb: "study",
        reason: "The verb 'study' agrees with the plural antecedent 'students', which 'who' refers to."
    },
     {
        sentence: "The employees who were promoted are very dedicated.",
        subject: "who",
        verb: "were promoted",
        reason: "The relative pronoun 'who' refers to the plural antecedent 'employees', so the plural verb 'were promoted' is used."
    },
    {
        sentence: "These are the workers who do the job well.",
        subject: "who",
        verb: "do",
        reason: "The relative pronoun 'who' refers to the plural noun 'workers', so the plural verb 'do' is used."
    },
    {
        sentence: "He is one of the men who do the work.",
        subject: "who",
        verb: "do",
        reason: "The pronoun 'who' refers to 'men' (plural), not 'one'. Therefore, the plural verb 'do' is correct."
    }
  ]
};