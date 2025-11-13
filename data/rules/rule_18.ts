import type { Rule } from '../../types.ts';

export const rule18: Rule = {
  id: 18,
  name: "Rule 18: The Subjunctive Mood",
  formula: "If / I wish + Subject ➜ were (hypothetical)",
  explanation: "When expressing a wish or contrary-to-fact condition, use were regardless of subject number.",
  examples: [
    {
        sentence: "I wish my sister were here.",
        subject: "my sister",
        verb: "were",
        reason: "The subjunctive mood is used for wishes or hypothetical situations. 'Were' is used instead of 'was' for the singular subject 'my sister'."
    },
    {
        sentence: "If the story were true, what would it matter?",
        subject: "the story",
        verb: "were",
        reason: "In this contrary-to-fact condition ('If...'), the subjunctive 'were' is used with the singular subject 'the story'."
    },
    {
        sentence: "The doctor insists that she rest for a week.",
        subject: "she",
        verb: "rest",
        reason: "In a clause expressing a demand or recommendation (after 'insists that'), the subjunctive base verb 'rest' is used, not 'rests'."
    },
    {
        sentence: "If I were a bird, I would fly.",
        subject: "I",
        verb: "were",
        reason: "For hypothetical 'If' clauses, the subjunctive 'were' is used for all subjects, including 'I'."
    },
    {
        sentence: "I wish my father were here.",
        subject: "my father",
        verb: "were",
        reason: "To express a wish, the subjunctive verb 'were' is used, even with a singular subject like 'my father'."
    },
    {
        sentence: "I wish I were taller.",
        subject: "I",
        verb: "were",
        reason: "The subjunctive 'were' is used after 'I wish' to express a condition that is not real."
    }
  ]
};