import type { QuizQuestion } from '../../types.ts';

export const rule8Quiz: QuizQuestion[] = [
  {
    question: "The dog, as well as the cats, ___ hungry.",
    options: ["is", "are", "were", "be"],
    correct: 0,
    difficulty: "easy",
    explanation: "The phrase 'as well as the cats' is an additive phrase and should be ignored. The verb agrees with the main subject, 'The dog' (singular), so 'is' is correct."
  },
  {
      question: "The student, together with his parents, ___ waiting outside.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The verb agrees with the main subject, 'The student' (singular). The phrase 'together with his parents' is an interrupter."
  },
  {
      question: "My sister, unlike my brothers, ___ to read.",
      options: ["love", "loves", "are loving", "have loved"],
      correct: 1,
      difficulty: "easy",
      explanation: "The phrase 'unlike my brothers' is parenthetical. The verb 'loves' agrees with the singular subject 'My sister'."
  },
  {
    question: "The CEO, as well as his assistants, ___ attending the conference.",
    options: ["are", "is", "were", "be"],
    correct: 1,
    difficulty: "medium",
    explanation: "The phrase 'as well as his assistants' is an additive phrase and should be ignored. The verb agrees with the main subject, 'The CEO' (singular), so 'is' is correct."
  },
  {
      question: "The main course, in addition to the appetizers, ___ delicious.",
      options: ["was", "were", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "The verb 'was' agrees with the primary subject 'The main course' (singular). The phrase 'in addition to the appetizers' is an interrupter."
  },
  {
      question: "The actor, accompanied by his agent, ___ arriving now.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "The phrase 'accompanied by his agent' does not affect the verb. The verb 'is' agrees with the singular subject 'The actor'."
  },
  {
    question: "The Prime Minister, and not his cabinet members, ___ the final decision.",
    options: ["make", "makes", "are making", "have made"],
    correct: 1,
    difficulty: "hard",
    explanation: "The phrase 'and not his cabinet members' is parenthetical and should be ignored. The verb must agree with the true subject, 'The Prime Minister' (singular), making 'makes' correct."
  },
  {
      question: "The old manuscript, including all its footnotes and appendices, ___ a valuable historical document.",
      options: ["constitute", "constitutes", "are constituting", "have constituted"],
      correct: 1,
      difficulty: "hard",
      explanation: "The subject is 'The old manuscript' (singular). The long additive phrase starting with 'including' is an interrupter. The verb must be 'constitutes'."
  },
  {
      question: "My father, like many of his generation, ___ that hard work is the key to success.",
      options: ["believe", "believes", "are believing", "have believed"],
      correct: 1,
      difficulty: "hard",
      explanation: "The parenthetical phrase 'like many of his generation' does not affect the verb. The verb 'believes' agrees with the singular subject 'My father'."
  }
];
