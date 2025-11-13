import type { QuizQuestion } from '../../types.ts';

export const rule6Quiz: QuizQuestion[] = [
  {
    question: "Either the students or the teacher ___ the answer.",
    options: ["know", "knows", "are knowing", "have known"],
    correct: 1,
    difficulty: "easy",
    explanation: "By the proximity rule, the verb agrees with the closest subject, 'the teacher' (singular). Therefore, 'knows' is correct."
  },
  {
      question: "The cat or the dogs ___ outside.",
      options: ["is", "are", "was", "be"],
      correct: 1,
      difficulty: "easy",
      explanation: "The verb agrees with the nearest subject, which is 'the dogs' (plural). So, 'are' is the correct verb."
  },
  {
      question: "Neither she nor I ___ going to the party.",
      options: ["is", "are", "am", "be"],
      correct: 2,
      difficulty: "easy",
      explanation: "Following the proximity rule, the verb must agree with 'I', the closest subject. The correct verb for 'I' is 'am'."
  },
  {
    question: "Neither the manager nor the employees ___ happy with the decision.",
    options: ["is", "was", "are", "be"],
    correct: 2,
    difficulty: "medium",
    explanation: "According to the proximity rule, when subjects are joined by 'neither...nor', the verb agrees with the subject closest to it. 'Employees' is plural and closest to the verb, so 'are' is correct."
  },
  {
      question: "Either the cookies or the cake ___ been eaten.",
      options: ["has", "have", "is", "are"],
      correct: 0,
      difficulty: "medium",
      explanation: "The verb agrees with the nearest subject, 'the cake' (singular). Therefore, the singular auxiliary 'has' is correct."
  },
  {
      question: "___ your aunt or your cousins coming to visit?",
      options: ["Is", "Are", "Was", "Were"],
      correct: 1,
      difficulty: "medium",
      explanation: "In a question, the verb still follows the proximity rule. 'Are' agrees with the closer subject, 'your cousins' (plural)."
  },
  {
    question: "Not only the team members but also the coach ___ responsible for the loss.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    difficulty: "hard",
    explanation: "Using the proximity rule for 'not only...but also', the verb agrees with the subject closer to it, which is 'the coach' (singular). Therefore, 'is' is the correct verb."
  },
  {
      question: "Neither the complex instructions nor the simple diagram ___ the process.",
      options: ["clarify", "clarifies", "are clarifying", "has clarified"],
      correct: 1,
      difficulty: "hard",
      explanation: "The verb must agree with the closest subject, 'the simple diagram' (singular). Therefore, the singular verb form 'clarifies' is correct."
  },
  {
      question: "Either the senators from the rural states or the representative from the city ___ the bill.",
      options: ["support", "supports", "are supporting", "have supported"],
      correct: 1,
      difficulty: "hard",
      explanation: "The verb agrees with the nearer subject, 'the representative' (singular). Thus, the correct verb is 'supports'."
  }
];
