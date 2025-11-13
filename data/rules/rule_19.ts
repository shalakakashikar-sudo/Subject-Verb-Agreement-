import type { Rule } from '../../types.ts';

export const rule19: Rule = {
  id: 19,
  name: "Rule 19: Formal Inversion with Negative Adverbs",
  formula: "Negative Adverb ➜ Auxiliary + Subject + Verb",
  explanation: "In formal statements beginning with negative or restrictive adverbs, the auxiliary verb precedes the subject. The auxiliary must still agree with the main subject.",
  examples: [
    {
        sentence: "Rarely does he arrive late.",
        subject: "he",
        verb: "does",
        reason: "After the negative adverb 'Rarely', the sentence is inverted. The auxiliary verb 'does' agrees with the singular subject 'he'."
    },
    {
        sentence: "Never have I seen such a beautiful sunset.",
        subject: "I",
        verb: "have",
        reason: "When a sentence starts with 'Never', the auxiliary 'have' comes before the subject 'I', with which it agrees."
    },
    {
        sentence: "Under no circumstances are you to leave this room.",
        subject: "you",
        verb: "are",
        reason: "The phrase 'Under no circumstances' forces an inversion. The verb 'are' comes before and agrees with the subject 'you'."
    },
    {
        sentence: "Not only does she sing but she also dances.",
        subject: "she",
        verb: "does",
        reason: "Following 'Not only', the auxiliary verb 'does' is placed before the subject 'she' and agrees with it."
    },
    {
        sentence: "Only after the meeting did they make a decision.",
        subject: "they",
        verb: "did",
        reason: "After the restrictive phrase 'Only after...', the auxiliary 'did' precedes the subject 'they'."
    },
    {
        sentence: "Seldom do they travel abroad.",
        subject: "they",
        verb: "do",
        reason: "The negative adverb 'Seldom' causes inversion. The auxiliary verb 'do' agrees with the plural subject 'they'."
    }
  ]
};