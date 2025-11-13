import type { QuizQuestion } from '../../types.ts';

export const rule14Quiz: QuizQuestion[] = [
  {
    question: "Five miles ___ a long way to walk.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    difficulty: "easy",
    explanation: "The distance 'Five miles' is treated as a single unit, so it requires the singular verb 'is'."
  },
  {
      question: "Two hours ___ a long time to wait.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The period 'Two hours' is considered a single block of time, so it takes the singular verb 'is'."
  },
  {
      question: "Twenty dollars ___ what I owe you.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The amount 'Twenty dollars' is treated as a single sum of money, requiring the singular verb 'is'."
  },
  {
    question: "Fifty dollars ___ too much for a t-shirt.",
    options: ["is", "are", "were", "be"],
    correct: 0,
    difficulty: "medium",
    explanation: "The amount 'Fifty dollars' is treated as a single sum of money, a singular unit. Therefore, it takes the singular verb 'is'."
  },
  {
      question: "Ten kilograms ___ the weight limit for this suitcase.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "The measurement 'Ten kilograms' is considered a single, total amount, so it takes the singular verb 'is'."
  },
  {
      question: "Six weeks ___ not enough time to complete the project.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "The time period 'Six weeks' is treated as a single duration, requiring the singular verb 'is'."
  },
  {
    question: "Two-thirds of the city ___ without power after the storm.",
    options: ["is", "are", "was", "were"],
    correct: 2,
    difficulty: "hard",
    explanation: "Fractions like 'two-thirds' follow the logic of quantifiers (Rule 11). The verb agrees with the noun that follows. Since 'city' is singular, the singular verb 'was' is correct."
  },
  {
      question: "Three-quarters of the students ___ passed the exam.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      difficulty: "hard",
      explanation: "With fractions, the verb agrees with the noun that follows the preposition 'of'. Since 'students' is plural, the plural verb 'have' is required."
  },
  {
      question: "One hundred and fifty acres ___ a large area of land.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "hard",
      explanation: "The measurement 'One hundred and fifty acres' is considered a single unit of area, so it takes the singular verb 'is'."
  }
];
