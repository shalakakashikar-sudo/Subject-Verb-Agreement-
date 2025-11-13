import type { QuizQuestion } from '../../types.ts';

export const rule19Quiz: QuizQuestion[] = [
  {
    question: "Never have I ___ such a thing.",
    options: ["see", "seen", "saw", "sees"],
    correct: 1,
    difficulty: "easy",
    explanation: "After the auxiliary verb 'have', the past participle form of the main verb is required. 'Seen' is the past participle of 'see'."
  },
  {
      question: "Rarely ___ she miss a deadline.",
      options: ["do", "does", "is", "has"],
      correct: 1,
      difficulty: "easy",
      explanation: "The negative adverb 'Rarely' causes inversion. The auxiliary verb 'does' comes before the subject and agrees with the singular 'she'."
  },
  {
      question: "Not only ___ he smart, but he is also funny.",
      options: ["is", "are", "do", "does"],
      correct: 0,
      difficulty: "easy",
      explanation: "After 'Not only', the verb is inverted. The verb 'is' agrees with the singular subject 'he'."
  },
  {
    question: "Seldom ___ we see such a magnificent display of talent.",
    options: ["do", "does", "is", "are"],
    correct: 0,
    difficulty: "medium",
    explanation: "When a sentence begins with a negative adverb like 'Seldom', the auxiliary verb comes before the subject. The auxiliary must agree with the subject 'we' (plural), so 'do' is correct."
  },
  {
      question: "Hardly had I arrived when the phone ___.",
      options: ["ring", "rang", "rung", "rings"],
      correct: 1,
      difficulty: "medium",
      explanation: "The phrase 'Hardly had I...' is typically followed by a simple past tense verb. 'Rang' is the simple past of 'ring'."
  },
  {
      question: "Only then ___ I realize my mistake.",
      options: ["did", "do", "have", "had"],
      correct: 0,
      difficulty: "medium",
      explanation: "After the restrictive phrase 'Only then', the sentence is inverted. The past tense auxiliary 'did' is used before the subject 'I'."
  },
  {
    question: "Under no circumstances ___ you to enter the restricted area.",
    options: ["are", "is", "do", "be"],
    correct: 0,
    difficulty: "hard",
    explanation: "The negative phrase 'Under no circumstances' causes an inversion. The auxiliary verb 'are' must come before the subject 'you' and agree with it."
  },
  {
      question: "Little ___ he know what was about to happen.",
      options: ["did", "do", "has", "had"],
      correct: 0,
      difficulty: "hard",
      explanation: "When a sentence begins with the negative adverb 'Little', it requires inversion. The past tense auxiliary 'did' must come before the subject 'he'."
  },
  {
      question: "No sooner had the curtain risen than the audience ___ applauding.",
      options: ["start", "starts", "started", "had started"],
      correct: 2,
      difficulty: "hard",
      explanation: "The construction 'No sooner had...than...' requires the second clause to be in the simple past tense. Therefore, 'started' is correct."
  }
];
