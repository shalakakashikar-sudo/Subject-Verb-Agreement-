import type { Rule } from '../../types.ts';

export const rule8: Rule = {
  id: 8,
  name: "Rule 8: Additive/Parenthetical Phrases",
  formula: "S1, (along with/as well as S2), ... ➜ Verb agrees with S1",
  explanation: "Additive or parenthetical phrases are interrupters and should be ignored. The verb agrees only with the initial subject. Common phrases to look out for include: along with, as well as, together with, in addition to, accompanied by, including, besides, and unlike.",
  examples: [
    {
        sentence: "The teacher, along with the students, is here.",
        subject: "teacher",
        verb: "is",
        reason: "The phrase 'along with the students' is an interrupter. The verb 'is' agrees with the main subject, 'teacher' (singular)."
    },
    {
        sentence: "The captain, together with his crew, was prepared for the storm.",
        subject: "captain",
        verb: "was",
        reason: "The phrase 'together with his crew' is an interrupter. The verb 'was' agrees with the singular subject 'captain'."
    },
    {
        sentence: "My brother, along with his friends, is coming.",
        subject: "My brother",
        verb: "is",
        reason: "The additive phrase 'along with his friends' is ignored. The verb 'is' agrees with the singular subject 'My brother'."
    },
    {
        sentence: "The singer, as well as her bandmates, performs weekly.",
        subject: "singer",
        verb: "performs",
        reason: "The verb 'performs' agrees with the initial subject 'singer'. The phrase 'as well as her bandmates' does not count."
    },
    {
        sentence: "The Prime Minister, not the monarch, decides policy.",
        subject: "Prime Minister",
        verb: "decides",
        reason: "The phrase 'not the monarch' is parenthetical. The verb 'decides' agrees with the singular subject 'The Prime Minister'."
    },
    {
        sentence: "The ambassador and perhaps his wife too is likely to be present.",
        subject: "ambassador",
        verb: "is",
        reason: "The phrase 'and perhaps his wife too' acts as an interrupter. The verb 'is' agrees with the main singular subject, 'The ambassador'."
    }
  ]
};