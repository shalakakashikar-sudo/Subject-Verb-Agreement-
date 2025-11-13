import type { QuizQuestion } from '../../types.ts';

export const rule3Quiz: QuizQuestion[] = [
  {
    question: "They ___ arrive on time for the show.",
    options: ["musts", "must", "haves to", "shoulds"],
    correct: 1,
    difficulty: "easy",
    explanation: "Modal verbs like 'must', 'can', or 'should' do not change their form based on the subject. They are always followed by the base form of the main verb."
  },
  {
      question: "You ___ finish your homework.",
      options: ["should", "shoulds", "to should", "shoulded"],
      correct: 0,
      difficulty: "easy",
      explanation: "Modal verbs like 'should' do not change form based on the subject and are followed by the base verb."
  },
  {
      question: "He ___ be there by 5 PM.",
      options: ["will", "wills", "willing", "is will"],
      correct: 0,
      difficulty: "easy",
      explanation: "The modal verb 'will' does not change for the singular subject 'He' and is followed by the base verb 'be'."
  },
  {
    question: "She feels ill, so she ___ see a doctor.",
    options: ["ought to", "must to", "should to", "will to"],
    correct: 0,
    difficulty: "medium",
    explanation: "'Ought to' is a complete modal phrase. The others are grammatically incorrect as modals are not followed by 'to' (except for 'ought to' and 'have to')."
  },
  {
      question: "The engine sounds strange; it ___ need to be checked.",
      options: ["might", "must", "can", "should"],
      correct: 0,
      difficulty: "medium",
      explanation: "'Might' expresses possibility, which is the most appropriate meaning in this context. Modal verbs are followed by the base verb 'need'."
  },
  {
      question: "One ___ always try to do one's best.",
      options: ["should", "must", "can", "may"],
      correct: 0,
      difficulty: "medium",
      explanation: "'Should' is used to express a moral obligation or recommendation, which fits the context of the sentence."
  },
  {
    question: "He insisted that the package ___ be delivered today.",
    options: ["would", "should", "must", "might"],
    correct: 1,
    difficulty: "hard",
    explanation: "In formal clauses expressing insistence, demand, or recommendation, the modal 'should' is often used, followed by the base form of the verb. 'He insisted that the package should be delivered.'"
  },
  {
      question: "If you had studied, you ___ have passed the exam.",
      options: ["would", "should", "must", "shall"],
      correct: 0,
      difficulty: "hard",
      explanation: "This is a third conditional sentence structure, which expresses a hypothetical past situation. 'Would have' is used to describe the hypothetical past result."
  },
  {
      question: "Lest we forget, we ___ honor their sacrifice.",
      options: ["should", "would", "could", "must"],
      correct: 0,
      difficulty: "hard",
      explanation: "In formal English, the conjunction 'lest' is often followed by 'should' to express a desire to prevent something from happening (in this case, forgetting)."
  }
];
