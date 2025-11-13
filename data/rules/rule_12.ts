import type { Rule } from '../../types.ts';

export const rule12: Rule = {
  id: 12,
  name: "Rule 12: Collective Nouns",
  formula: "Collective Noun (as unit) ➜ Singular Verb | (as individuals) ➜ Plural Verb",
  explanation: "When a collective noun acts together as a single unit, use singular verb. When members act separately, use plural verb.",
  examples: [
    {
        sentence: "The team is winning.",
        subject: "team",
        verb: "is",
        reason: "The collective noun 'team' is acting as a single unit, so it takes the singular verb 'is'."
    },
    {
        sentence: "The faculty are debating the new curriculum.",
        subject: "faculty",
        verb: "are",
        reason: "The members of the 'faculty' are acting as individuals in a debate, so the plural verb 'are' is used."
    },
    {
        sentence: "My family is settled in Australia.",
        subject: "family",
        verb: "is",
        reason: "'Family' is treated as a single, cohesive unit, requiring the singular verb 'is'."
    },
    {
        sentence: "The committee decides how to proceed.",
        subject: "committee",
        verb: "decides",
        reason: "The 'committee' is acting in unison as one body, so it takes the singular verb 'decides'."
    },
    {
        sentence: "The staff are in disagreement.",
        subject: "staff",
        verb: "are",
        reason: "Here, 'staff' refers to the individual members who are in disagreement, so the plural verb 'are' is used."
    },
    {
        sentence: "The jury were allowed to go home.",
        subject: "jury",
        verb: "were",
        reason: "The members of the 'jury' are acting as individuals (going to their separate homes), so the plural verb 'were' is correct."
    },
    {
        sentence: "The orchestra are tuning their instruments.",
        subject: "orchestra",
        verb: "are",
        reason: "The members of the 'orchestra' are tuning their individual instruments, indicating separate actions, so a plural verb 'are' is needed."
    }
  ]
};