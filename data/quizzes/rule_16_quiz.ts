import type { QuizQuestion } from '../../types.ts';

export const rule16Quiz: QuizQuestion[] = [
  {
    question: "My glasses ___ on the desk.",
    options: ["is", "are", "was", "be"],
    correct: 1,
    difficulty: "easy",
    explanation: "'Glasses' is an inherently plural noun because it consists of two parts. It requires the plural verb 'are'."
  },
  {
      question: "These shorts ___ too small for me.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "easy",
      explanation: "'Shorts' is a plural noun for a paired item and requires the plural verb 'are'."
  },
  {
      question: "The scissors ___ in the drawer.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "easy",
      explanation: "'Scissors' is always treated as a plural noun, so it takes the plural verb 'are'."
  },
  {
    question: "A pair of scissors ___ on the table.",
    options: ["was", "were", "are", "be"],
    correct: 0,
    difficulty: "medium",
    explanation: "The true subject of the sentence is the singular noun 'pair', not 'scissors'. Therefore, the singular verb 'was' is correct."
  },
  {
      question: "That pair of trousers ___ a hole in it.",
      options: ["has", "have", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "The subject is the singular noun 'pair', so it requires the singular verb 'has'."
  },
  {
      question: "Two pairs of shoes ___ by the door.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "medium",
      explanation: "The subject is 'Two pairs', which is plural. Therefore, it takes the plural verb 'are'."
  },
  {
    question: "This new pair of jeans ___ perfectly.",
    options: ["fit", "fits", "are fitting", "have fit"],
    correct: 1,
    difficulty: "hard",
    explanation: "The subject of the verb is the singular noun 'pair'. Therefore, it requires the singular verb form 'fits'."
  },
  {
      question: "Where ___ the pliers I bought yesterday?",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "hard",
      explanation: "'Pliers' is an inherently plural noun, even when referring to a single tool. It requires the plural verb 'are'."
  },
  {
      question: "The tongs ___ too hot to touch.",
      options: ["was", "were", "is", "be"],
      correct: 1,
      difficulty: "hard",
      explanation: "'Tongs' is a noun for a paired item and is always plural. Therefore, the plural verb 'were' is correct."
  }
];
