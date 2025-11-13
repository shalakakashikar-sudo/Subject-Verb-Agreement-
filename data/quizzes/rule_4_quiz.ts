import type { QuizQuestion } from '../../types.ts';

export const rule4Quiz: QuizQuestion[] = [
  {
    question: "The dog and the cat ___ playing in the yard.",
    options: ["is", "are", "was", "be"],
    correct: 1,
    difficulty: "easy",
    explanation: "Two distinct subjects ('dog' and 'cat') are joined by 'and', forming a plural subject that requires the plural verb 'are'."
  },
  {
      question: "A boy and a girl ___ waiting outside.",
      options: ["is", "are", "was", "be"],
      correct: 1,
      difficulty: "easy",
      explanation: "'A boy' and 'a girl' are two separate subjects connected by 'and', making the subject plural. Thus, 'are' is correct."
  },
  {
      question: "The pen and the paper ___ on the desk.",
      options: ["is", "are", "was", "be"],
      correct: 1,
      difficulty: "easy",
      explanation: "'The pen' and 'the paper' are two distinct items joined by 'and', creating a plural subject that requires the plural verb 'are'."
  },
  {
    question: "Peanut butter and jelly ___ my favorite sandwich.",
    options: ["are", "is", "were", "be"],
    correct: 1,
    difficulty: "medium",
    explanation: "'Peanut butter and jelly' is treated as a single conceptual unit (one type of sandwich). When two subjects form a single idea, a singular verb ('is') is used."
  },
  {
      question: "The bed and breakfast ___ charming.",
      options: ["was", "were", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "'The bed and breakfast' refers to a single establishment or concept, so it is treated as a singular subject requiring the verb 'was'."
  },
  {
      question: "The president and CEO ___ arriving soon.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "Since the article 'The' is not repeated, 'president and CEO' refers to a single person holding two roles. The subject is singular, so 'is' is correct."
  },
  {
    question: "The creator and director of the film ___ here to answer questions.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    difficulty: "hard",
    explanation: "Since there is only one article ('The'), 'creator and director' refers to a single person. Therefore, the subject is singular and requires the singular verb 'is'."
  },
  {
      question: "Trial and error ___ a fundamental part of learning.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "hard",
      explanation: "The phrase 'Trial and error' represents a single, unified concept or method. Therefore, it takes the singular verb 'is'."
  },
  {
      question: "The ebb and flow of the tides ___ caused by the moon.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "hard",
      explanation: "'The ebb and flow' is a fixed phrase that describes a single, continuous process. It is treated as a singular subject and takes the singular verb 'is'."
  }
];
