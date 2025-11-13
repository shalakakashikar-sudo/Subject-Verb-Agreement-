import type { Rule } from '../../types.ts';

export const rule11: Rule = {
  id: 11,
  name: "Rule 11: Flexible Quantifiers",
  formula: "Quantifier + Plural Noun ➜ Plural Verb | Quantifier + Uncountable Noun ➜ Singular Verb",
  explanation: "For quantifiers like all, some, most, none, half, the verb agrees with the noun following the quantifier. Countable plural nouns take plural verbs; uncountable nouns take singular verbs.",
  examples: [
    {
        sentence: "All of the cookies are delicious.",
        subject: "All",
        verb: "are",
        reason: "With the quantifier 'All', the verb 'are' agrees with the plural object of the preposition, 'cookies'."
    },
    {
        sentence: "Some of the pie has been eaten.",
        subject: "Some",
        verb: "has",
        reason: "The quantifier 'Some' refers to 'pie', an uncountable noun, so the verb 'has' is singular."
    },
    {
        sentence: "Most of the students are present.",
        subject: "Most",
        verb: "are",
        reason: "The verb 'are' agrees with 'students' (plural), which is the noun following the quantifier 'Most'."
    },
    {
        sentence: "Half of the boys are absent.",
        subject: "Half",
        verb: "are",
        reason: "'Half' is a quantifier, so the verb 'are' agrees with the plural noun 'boys'."
    },
    {
        sentence: "All of the sugar is sweet.",
        subject: "All",
        verb: "is",
        reason: "Here, 'All' refers to the uncountable noun 'sugar', so the singular verb 'is' is used."
    },
    {
        sentence: "Most of the energy is lost.",
        subject: "Most",
        verb: "is",
        reason: "The verb 'is' agrees with the uncountable noun 'energy', so it is singular."
    },
    {
        sentence: "None of the contestants were able to answer the final question.",
        subject: "None",
        verb: "were",
        reason: "When 'None' refers to a plural noun ('contestants'), the plural verb 'were' is often preferred in formal writing."
    },
    {
        sentence: "None of the work is completed.",
        subject: "None",
        verb: "is",
        reason: "Since 'work' is an uncountable noun, the verb 'is' is singular."
    }
  ]
};