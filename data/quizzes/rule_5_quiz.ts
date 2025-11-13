import type { QuizQuestion } from '../../types.ts';

export const rule5Quiz: QuizQuestion[] = [
  {
    question: "Every student ___ a textbook.",
    options: ["has", "have", "are having", "is have"],
    correct: 0,
    difficulty: "easy",
    explanation: "The word 'Every' makes the subject 'student' singular, so it requires the singular verb 'has'."
  },
  {
      question: "Each apple ___ juicy.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The word 'Each' makes the subject 'apple' singular, requiring the singular verb 'is'."
  },
  {
      question: "Every car on the street ___ red.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "'Every' modifies the singular subject 'car', so the verb must also be singular ('is')."
  },
  {
    question: "Each of the players ___ a unique skill.",
    options: ["have", "has", "are having", "is have"],
    correct: 1,
    difficulty: "medium",
    explanation: "The word 'Each' is always singular. The verb must agree with 'Each', not with 'players'. Therefore, the singular verb 'has' is correct."
  },
  {
      question: "Every book and magazine on the shelf ___ been read.",
      options: ["has", "have", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "Even with a compound subject joined by 'and', the word 'Every' makes the entire subject singular. Thus, 'has' is the correct verb."
  },
  {
      question: "Each of the candidates ___ to give a speech.",
      options: ["has", "have", "are", "is"],
      correct: 0,
      difficulty: "medium",
      explanation: "The pronoun 'Each' is the true subject and is always singular. It requires the singular verb 'has'."
  },
  {
    question: "Each senator and representative ___ given a single vote on the matter.",
    options: ["was", "were", "are", "be"],
    correct: 0,
    difficulty: "hard",
    explanation: "The word 'Each' makes the entire compound subject singular, even though two nouns are listed. Therefore, the singular verb 'was' is correct."
  },
  {
      question: "Each of the problems, however difficult they may seem, ___ a solution.",
      options: ["has", "have", "are having", "is have"],
      correct: 0,
      difficulty: "hard",
      explanation: "The true subject is 'Each', which is always singular. The intervening clauses must be ignored. Therefore, the singular verb 'has' is correct."
  },
  {
      question: "Every twist and turn of the plot ___ the audience.",
      options: ["surprise", "surprises", "are surprising", "have surprised"],
      correct: 1,
      difficulty: "hard",
      explanation: "The word 'Every' makes the compound subject 'twist and turn' singular, as it refers to each one individually. Thus, the verb needs an '-s': 'surprises'."
  }
];
