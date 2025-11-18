
import type { Rule } from '../../types.ts';

export const rule8: Rule = {
  id: 8,
  name: "Rule 8: Additive/Parenthetical Phrases",
  formula: "S1, (along with/as well as S2), ... ➜ Verb agrees with S1",
  explanation: "Additive or parenthetical phrases are interrupters and should be ignored. The verb agrees only with the initial subject. Common phrases include: along with, as well as, together with, in addition to.",
  examples: [
    {
      sentence: "The teacher, along with the students, is going to the museum.",
      subject: "The teacher",
      verb: "is",
      reason: "The verb 'is' agrees with 'The teacher'. The additive phrase is ignored."
    },
    {
      sentence: "My friends, as well as my brother, are coming.",
      subject: "My friends",
      verb: "are",
      reason: "The main subject 'My friends' is plural, so the verb 'are' is used."
    },
    {
      sentence: "The captain, together with the crew, was saved.",
      subject: "The captain",
      verb: "was",
      reason: "The singular subject 'The captain' requires the singular verb 'was'."
    }
  ]
};
