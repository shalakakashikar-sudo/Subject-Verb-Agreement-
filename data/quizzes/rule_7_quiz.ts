import type { QuizQuestion } from '../../types.ts';

export const rule7Quiz: QuizQuestion[] = [
  {
    question: "One of my friends ___ coming to visit.",
    options: ["is", "are", "be", "were"],
    correct: 0,
    difficulty: "easy",
    explanation: "The subject is 'One' (singular), not 'friends'. The phrase 'of my friends' is an intervening phrase. Therefore, the singular verb 'is' is correct."
  },
  {
      question: "The color of the walls ___ too bright.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The verb must agree with the subject 'color' (singular), not 'walls'. The singular verb 'is' is correct."
  },
  {
      question: "The key to the cabinets ___ missing.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The subject is 'key' (singular), so the verb must also be singular. The phrase 'to the cabinets' should be ignored."
  },
  {
    question: "The list of items ___ on the table.",
    options: ["are", "is", "were", "be"],
    correct: 1,
    difficulty: "medium",
    explanation: "The true subject is 'list' (singular), not 'items'. The intervening phrase 'of items' should be ignored. Therefore, the singular verb 'is' is correct."
  },
  {
      question: "The attitude of the students ___ changing.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "The verb agrees with the main subject 'attitude' (singular), not the noun 'students' in the prepositional phrase."
  },
  {
      question: "A crate of oranges ___ delivered yesterday.",
      options: ["was", "were", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "The subject is 'crate' (singular), not 'oranges'. Therefore, the singular verb 'was' is correct."
  },
  {
    question: "The woman with all the cats ___ in that large, old house.",
    options: ["live", "lives", "are living", "have lived"],
    correct: 1,
    difficulty: "hard",
    explanation: "The subject is the singular noun 'woman'. The prepositional phrase 'with all the cats' must be ignored. Thus, the verb must be the singular form 'lives'."
  },
  {
      question: "The source of all our problems ___ a lack of communication.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "hard",
      explanation: "The main subject is 'source' (singular), not 'problems'. The verb must agree with 'source', so 'is' is correct."
  },
  {
      question: "The discovery of new planets ___ astronomers.",
      options: ["excite", "excites", "are exciting", "have excited"],
      correct: 1,
      difficulty: "hard",
      explanation: "The true subject is 'discovery' (singular). The intervening phrase 'of new planets' does not affect the verb. Therefore, 'excites' is correct."
  }
];
