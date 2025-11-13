import type { QuizQuestion } from '../../types.ts';

export const rule21Quiz: QuizQuestion[] = [
  {
    question: "What you said ___ interesting.",
    options: ["was", "were", "are", "be"],
    correct: 0,
    difficulty: "easy",
    explanation: "The entire noun clause 'What you said' acts as a single subject, referring to one idea. It is treated as singular, requiring the verb 'was'."
  },
  {
      question: "Where she went ___ a secret.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "The noun clause 'Where she went' is a single piece of information and acts as a singular subject, requiring the verb 'is'."
  },
  {
      question: "Whoever called ___ not leave a message.",
      options: ["did", "do", "has", "have"],
      correct: 0,
      difficulty: "easy",
      explanation: "The pronoun 'Whoever' is singular, so the auxiliary verb for the past tense is 'did'."
  },
  {
    question: "What they want ___ a fair chance to compete.",
    options: ["is", "are", "be", "were"],
    correct: 0,
    difficulty: "medium",
    explanation: "The entire noun clause 'What they want' acts as a single, abstract subject. It refers to one idea and is treated as singular, requiring the singular verb 'is'."
  },
  {
      question: "Why he resigned ___ still unclear.",
      options: ["remain", "remains", "are remaining", "have remained"],
      correct: 1,
      difficulty: "medium",
      explanation: "The noun clause 'Why he resigned' is the singular subject of the sentence. Therefore, it takes the singular verb 'remains'."
  },
  {
      question: "Whatever you decide ___ fine with me.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "The clause 'Whatever you decide' acts as a single, abstract concept, so it takes the singular verb 'is'."
  },
  {
    question: "How the magician performed the trick ___ a mystery.",
    options: ["remain", "remains", "are remaining", "have remained"],
    correct: 1,
    difficulty: "hard",
    explanation: "The entire noun clause 'How the magician performed the trick' is the singular subject of the sentence. Therefore, it takes the singular verb 'remains'."
  },
  {
      question: "What you and your brother do in your spare time ___ your own business.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "hard",
      explanation: "The entire clause, despite containing a compound subject ('you and your brother'), functions as one single idea (the activity). Therefore, it is treated as a singular subject requiring the verb 'is'."
  },
  {
      question: "That the Earth is round ___ a well-known fact.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "hard",
      explanation: "The noun clause 'That the Earth is round' acts as the subject of the sentence. It represents a single fact and is therefore singular, requiring the verb 'is'."
  }
];
