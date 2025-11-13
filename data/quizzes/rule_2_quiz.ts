import type { QuizQuestion } from '../../types.ts';

export const rule2Quiz: QuizQuestion[] = [
  {
    question: "He ___ finished his homework.",
    options: ["have", "has", "is", "be"],
    correct: 1,
    difficulty: "easy",
    explanation: "The subject 'He' is singular, so it requires the singular auxiliary verb 'has' to form the present perfect tense. 'Have' is used for plural subjects."
  },
  {
    question: "We ___ going to the park.",
    options: ["is", "are", "am", "be"],
    correct: 1,
    difficulty: "easy",
    explanation: "The subject 'We' is plural, requiring the plural auxiliary verb 'are'."
  },
  {
    question: "My sister ___ not like spinach.",
    options: ["do", "does", "is", "has"],
    correct: 1,
    difficulty: "easy",
    explanation: "The subject 'My sister' is singular, so it requires the singular auxiliary verb 'does'."
  },
  {
    question: "Why ___ you late for the meeting yesterday?",
    options: ["are", "is", "was", "were"],
    correct: 3,
    difficulty: "medium",
    explanation: "The subject 'you' always takes the plural form of the verb, which in the past tense is 'were'."
  },
  {
    question: "The children ___ been playing for hours.",
    options: ["has", "have", "is", "are"],
    correct: 1,
    difficulty: "medium",
    explanation: "The subject 'The children' is plural, so it requires the plural auxiliary verb 'have'."
  },
  {
    question: "___ she finished her chores?",
    options: ["Has", "Have", "Do", "Does"],
    correct: 0,
    difficulty: "medium",
    explanation: "The subject 'she' is singular, requiring the singular auxiliary verb 'Has' to form the present perfect question."
  },
  {
    question: "___ either of the candidates arrived yet?",
    options: ["Has", "Have", "Is", "Are"],
    correct: 0,
    difficulty: "hard",
    explanation: "The subject of the sentence is 'either', which is a singular indefinite pronoun. Therefore, it requires the singular auxiliary verb 'Has'."
  },
  {
      question: "The results of the experiment ___ not support the hypothesis.",
      options: ["do", "does", "is", "are"],
      correct: 0,
      difficulty: "hard",
      explanation: "The true subject is 'results' (plural), not 'experiment'. Therefore, it requires the plural auxiliary verb 'do'."
  },
  {
      question: "There ___ been many attempts to solve the puzzle.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      difficulty: "hard",
      explanation: "In sentences starting with 'There', the verb agrees with the true subject that follows. The subject is 'many attempts' (plural), so 'have' is correct."
  }
];
