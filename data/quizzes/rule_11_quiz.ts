import type { QuizQuestion } from '../../types.ts';

export const rule11Quiz: QuizQuestion[] = [
  {
    question: "Some of the cake ___ missing.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    difficulty: "easy",
    explanation: "Since 'cake' is an uncountable noun, the verb must be singular. 'Is' is the correct choice."
  },
  {
      question: "All of the birds ___ flown away.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      difficulty: "easy",
      explanation: "The verb agrees with the noun 'birds' (plural), which follows the quantifier. So, 'have' is correct."
  },
  {
      question: "Most of the sand ___ white.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "easy",
      explanation: "'Sand' is an uncountable noun, so it takes the singular verb 'is'."
  },
  {
    question: "Some of the water ___ contaminated.",
    options: ["are", "is", "were", "be"],
    correct: 1,
    difficulty: "medium",
    explanation: "For quantifiers like 'some', the verb agrees with the noun that follows. 'Water' is an uncountable noun, which is treated as singular. Thus, 'is' is the correct verb."
  },
  {
      question: "Half of the students ___ finished the test.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      difficulty: "medium",
      explanation: "The verb agrees with the countable plural noun 'students'. Therefore, the plural verb 'have' is correct."
  },
  {
      question: "Most of the information ___ outdated.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      difficulty: "medium",
      explanation: "'Information' is an uncountable noun, so it requires the singular verb 'is'."
  },
  {
    question: "None of the advice he gave ___ helpful.",
    options: ["was", "were", "are", "be"],
    correct: 0,
    difficulty: "hard",
    explanation: "The verb agrees with the noun 'advice', which is uncountable and therefore grammatically singular. The correct verb is 'was'."
  },
  {
      question: "A lot of the equipment ___ to be replaced.",
      options: ["need", "needs", "are needing", "have needed"],
      correct: 1,
      difficulty: "hard",
      explanation: "The verb agrees with the uncountable noun 'equipment'. Therefore, the singular verb 'needs' is correct."
  },
  {
      question: "A third of the population ___ in poverty.",
      options: ["live", "lives", "are living", "is live"],
      correct: 1,
      difficulty: "hard",
      explanation: "With fractions, the verb agrees with the noun that follows. 'Population' is a collective noun often treated as singular in this context. Thus, 'lives' is correct."
  }
];
