import type { QuizQuestion } from '../../types.ts';

export const rule20Quiz: QuizQuestion[] = [
  {
    question: "A number of students ___ late.",
    options: ["was", "were", "is", "be"],
    correct: 1,
    difficulty: "easy",
    explanation: "The phrase 'A number of' means 'many' and is treated as a plural subject, requiring the plural verb 'were'."
  },
  {
      question: "The number of days in February ___ 28 or 29.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "'The number of' refers to a single quantity and is always singular, requiring the verb 'is'."
  },
  {
      question: "A number of questions ___ asked.",
      options: ["was", "were", "is", "be"],
      correct: 1,
      difficulty: "easy",
      explanation: "'A number of' is a plural expression, so it takes the plural verb 'were'."
  },
  {
    question: "The number of mistakes ___ surprisingly low.",
    options: ["was", "were", "are", "be"],
    correct: 0,
    difficulty: "medium",
    explanation: "The phrase 'The number of' refers to a single figure and is always treated as a singular subject. It requires the singular verb 'was'."
  },
  {
      question: "A number of new employees ___ been hired.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      difficulty: "medium",
      explanation: "'A number of' is treated as plural, so it requires the plural auxiliary verb 'have'."
  },
  {
      question: "The number of guests at the party ___ over one hundred.",
      options: ["was", "were", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "The subject is 'The number' (singular), so the singular verb 'was' is correct."
  },
  {
    question: "The number of issues that ___ to be addressed is overwhelming.",
    options: ["need", "needs", "is needing", "has needed"],
    correct: 0,
    difficulty: "hard",
    explanation: "This sentence has two subject-verb pairs. 'The number ... is overwhelming' is the main one. The relative clause is 'that need to be addressed', where 'that' refers to the plural 'issues'. Therefore, 'need' is the correct verb for the clause."
  },
  {
      question: "A growing number of people ___ choosing to work from home.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "hard",
      explanation: "Even with 'growing', the phrase 'A number of' still functions as a plural subject, requiring the plural verb 'are'."
  },
  {
      question: "While a number of solutions ___ proposed, the number of viable options ___ limited.",
      options: ["was, were", "were, was", "are, is", "is, are"],
      correct: 1,
      difficulty: "hard",
      explanation: "'A number of solutions' is plural, so it needs 'were'. 'The number of viable options' is singular, so it needs 'was'."
  }
];
