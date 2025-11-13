import type { QuizQuestion } from '../../types.ts';

export const rule22Quiz: QuizQuestion[] = [
  {
    question: "It is you who ___ mistaken.",
    options: ["is", "are", "am", "be"],
    correct: 1,
    difficulty: "easy",
    explanation: "The verb in the relative clause must agree with the antecedent of 'who', which is 'you'. Therefore, 'are' is the correct verb."
  },
  {
      question: "It is he who ___ at the door.",
      options: ["is", "are", "am", "be"],
      correct: 0,
      difficulty: "easy",
      explanation: "The verb must agree with the antecedent of 'who', which is 'he' (third-person singular). So, 'is' is correct."
  },
  {
      question: "It is they who ___ making all the noise.",
      options: ["is", "are", "am", "be"],
      correct: 1,
      difficulty: "easy",
      explanation: "The antecedent of 'who' is the plural pronoun 'they', so the verb must be the plural form 'are'."
  },
  {
    question: "It is I who ___ responsible for this project.",
    options: ["is", "are", "am", "be"],
    correct: 2,
    difficulty: "medium",
    explanation: "The verb must agree in person with its antecedent. The relative pronoun 'who' refers to 'I' (first-person singular), so the correct verb is 'am'."
  },
  {
      question: "You are the person who ___ me yesterday.",
      options: ["call", "calls", "called", "calling"],
      correct: 2,
      difficulty: "medium",
      explanation: "The antecedent of 'who' is 'person' (third-person singular). The context 'yesterday' indicates past tense, so 'called' is correct. The verb tense is independent of the agreement rule here, but it's a common trick."
  },
  {
      question: "He is the one who ___ all the answers.",
      options: ["know", "knows", "is knowing", "have known"],
      correct: 1,
      difficulty: "medium",
      explanation: "The verb in the relative clause agrees with the antecedent of 'who', which is 'one' (singular). Therefore, the verb is 'knows'."
  },
  {
    question: "She is the one person among the candidates who truly ___ the community.",
    options: ["understand", "understands", "are understanding", "have understood"],
    correct: 1,
    difficulty: "hard",
    explanation: "The antecedent of the relative pronoun 'who' is 'one person' (singular), not 'candidates'. Therefore, the verb must be the singular form 'understands'."
  },
  {
      question: "It is we who ___ to make the first move.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      difficulty: "hard",
      explanation: "The verb in the relative clause must agree with the antecedent of 'who', which is the plural pronoun 'we'. Therefore, 'have' is correct."
  },
  {
      question: "They are the artists who ___ these masterpieces.",
      options: ["paint", "paints", "is painting", "has painted"],
      correct: 0,
      difficulty: "hard",
      explanation: "The antecedent of 'who' is 'artists' (plural). Therefore, the verb must be the plural base form 'paint'."
  }
];
