import type { QuizQuestion } from '../../types.ts';

export const rule17Quiz: QuizQuestion[] = [
  {
    question: "The man who ___ next door is a doctor.",
    options: ["live", "lives", "is living", "have lived"],
    correct: 1,
    difficulty: "easy",
    explanation: "The relative pronoun 'who' refers to its antecedent, 'The man' (singular). Therefore, the verb must be 'lives'."
  },
  {
      question: "I like the book that ___ on the table.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The pronoun 'that' refers to the singular antecedent 'book', so the singular verb 'is' is correct."
  },
  {
      question: "The dogs that ___ barking belong to my neighbor.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      difficulty: "easy",
      explanation: "The pronoun 'that' refers to the plural antecedent 'dogs', so the plural verb 'are' is correct."
  },
  {
    question: "She is one of the students who always ___ their homework.",
    options: ["do", "does", "is doing", "has done"],
    correct: 0,
    difficulty: "medium",
    explanation: "The relative pronoun 'who' refers to its antecedent 'students' (plural), not 'one'. Therefore, the verb must be the plural form 'do'."
  },
  {
      question: "This is the car which ___ the best gas mileage.",
      options: ["has", "have", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "The pronoun 'which' refers to the singular antecedent 'car', requiring the singular verb 'has'."
  },
  {
      question: "The employees who ___ for the promotion are nervous.",
      options: ["is waiting", "are waiting", "waits", "wait"],
      correct: 1,
      difficulty: "medium",
      explanation: "The pronoun 'who' refers to the plural antecedent 'employees'. Therefore, the plural verb phrase 'are waiting' is correct."
  },
  {
    question: "He is one of those people who ___ always on time.",
    options: ["is", "are", "be", "was"],
    correct: 1,
    difficulty: "hard",
    explanation: "The relative pronoun 'who' refers to its antecedent, 'people' (plural), not 'one'. Therefore, the verb must be plural, making 'are' the correct choice."
  },
  {
      question: "The only one of the students who ___ the answer is Sarah.",
      options: ["know", "knows", "is knowing", "have known"],
      correct: 1,
      difficulty: "hard",
      explanation: "In the phrase 'the only one of...', the antecedent of 'who' is the singular 'one', not the plural 'students'. Therefore, the singular verb 'knows' is correct."
  },
  {
      question: "The company that ___ its employees well is successful.",
      options: ["treat", "treats", "are treating", "have treated"],
      correct: 1,
      difficulty: "hard",
      explanation: "The relative pronoun 'that' refers to the singular antecedent 'company'. Thus, the verb must be the singular form 'treats'."
  }
];
