import type { QuizQuestion } from '../../types.ts';

export const rule10Quiz: QuizQuestion[] = [
  {
    question: "Everyone ___ excited for the party.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    difficulty: "easy",
    explanation: "The indefinite pronoun 'Everyone' is always singular and requires the singular verb 'is'."
  },
  {
      question: "Somebody ___ at the door.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "'Somebody' is a singular indefinite pronoun and takes the singular verb 'is'."
  },
  {
      question: "Nothing ___ impossible.",
      options: ["seem", "seems", "are", "is"],
      correct: 1,
      difficulty: "easy",
      explanation: "Indefinite pronouns ending in '-thing' are singular. Thus, 'seems' is the correct verb."
  },
  {
    question: "Everybody ___ to be loved.",
    options: ["want", "wants", "are wanting", "is want"],
    correct: 1,
    difficulty: "medium",
    explanation: "Indefinite pronouns ending in '-body' like 'Everybody' are always singular. Therefore, the verb requires an '-s' ending, making 'wants' correct."
  },
  {
      question: "Either of the answers ___ correct.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "The pronoun 'Either' is the true subject and is always singular, requiring the singular verb 'is'."
  },
  {
      question: "Anyone who cares about the environment ___ to recycle.",
      options: ["need", "needs", "are needing", "have needed"],
      correct: 1,
      difficulty: "medium",
      explanation: "The indefinite pronoun 'Anyone' is singular, so the verb must be 'needs'."
  },
  {
    question: "Neither of the choices ___ appealing to me.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    difficulty: "hard",
    explanation: "The pronouns 'neither' and 'either' are always singular, even when followed by a plural phrase like 'of the choices'. Therefore, the singular verb 'is' is correct."
  },
  {
      question: "Everything, including the furniture and the paintings, ___ sold at auction.",
      options: ["was", "were", "is", "are"],
      correct: 0,
      difficulty: "hard",
      explanation: "The subject is 'Everything', which is always singular. The intervening phrase must be ignored. Thus, 'was' is the correct verb."
  },
  {
      question: "Each of the club members who paid their dues ___ a T-shirt.",
      options: ["receive", "receives", "are receiving", "have received"],
      correct: 1,
      difficulty: "hard",
      explanation: "The true subject of the main clause is 'Each', which is singular. The relative clause ('who paid their dues') modifies 'members' but does not change the main verb. 'Receives' agrees with 'Each'."
  }
];
