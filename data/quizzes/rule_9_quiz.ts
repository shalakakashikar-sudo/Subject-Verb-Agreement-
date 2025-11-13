import type { QuizQuestion } from '../../types.ts';

export const rule9Quiz: QuizQuestion[] = [
  {
    question: "There ___ three cookies left in the jar.",
    options: ["is", "are", "was", "be"],
    correct: 1,
    difficulty: "easy",
    explanation: "In sentences beginning with 'There', the verb agrees with the true subject that follows it. The subject is 'three cookies' (plural), so the plural verb 'are' is correct."
  },
  {
      question: "Here ___ your ticket.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The verb 'is' agrees with the true subject 'your ticket' (singular), which follows it."
  },
  {
      question: "There ___ a problem with the engine.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The singular verb 'is' is used because the true subject, 'a problem', is singular."
  },
  {
    question: "Here ___ the keys you were looking for.",
    options: ["is", "are", "was", "be"],
    correct: 1,
    difficulty: "medium",
    explanation: "In sentences beginning with 'Here', the verb agrees with the subject that follows it. The subject is 'the keys' (plural), so the plural verb 'are' is correct."
  },
  {
      question: "There ___ a few good reasons for his decision.",
      options: ["was", "were", "is", "be"],
      correct: 1,
      difficulty: "medium",
      explanation: "The verb 'were' agrees with the plural subject 'a few good reasons' that comes after it."
  },
  {
      question: "There ___ only one slice of pizza left.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "The verb 'is' agrees with the singular subject 'one slice' that follows it."
  },
  {
    question: "There ___ to be a mistake in the calculations.",
    options: ["seem", "seems", "is seeming", "have seemed"],
    correct: 1,
    difficulty: "hard",
    explanation: "The verb must agree with the true subject that follows, which is 'a mistake' (singular). Therefore, the singular verb 'seems' is correct."
  },
  {
      question: "Across the street ___ a bakery and a bookstore.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "hard",
      explanation: "This is an inverted sentence. The true subject is 'a bakery and a bookstore' (plural), which requires the plural verb 'are'."
  },
  {
      question: "Here ___ the results from the latest study.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "hard",
      explanation: "The verb agrees with the subject that follows, which is 'the results' (plural). Therefore, 'are' is correct."
  }
];
