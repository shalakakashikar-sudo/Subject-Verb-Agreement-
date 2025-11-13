import type { Rule } from '../../types.ts';

export const rule13: Rule = {
  id: 13,
  name: "Rule 13: Verbal Phrases and Gerunds as Subjects",
  formula: "Gerund/Infinitive (as subject) ➜ Singular Verb | Gerund + AND + Gerund ➜ Plural Verb",
  explanation: "A single gerund or infinitive as subject is treated as one abstract idea requiring singular verb. BUT when two distinct verbal activities are joined by AND, they require plural verb.",
  examples: [
    {
        sentence: "Swimming is my favorite hobby.",
        subject: "Swimming",
        verb: "is",
        reason: "The gerund 'Swimming' acts as a single, singular subject, requiring the verb 'is'."
    },
    {
        sentence: "To err is human.",
        subject: "To err",
        verb: "is",
        reason: "The infinitive 'To err' functions as a singular noun subject, taking the singular verb 'is'."
    },
    {
        sentence: "To study grammar is hard.",
        subject: "To study grammar",
        verb: "is",
        reason: "The infinitive phrase 'To study grammar' is a single activity and functions as a singular subject, taking the verb 'is'."
    },
    {
        sentence: "Learning English takes time.",
        subject: "Learning English",
        verb: "takes",
        reason: "The gerund phrase 'Learning English' is the subject and is treated as a single concept, so it needs the singular verb 'takes'."
    },
    {
        sentence: "Reading and writing are essential skills.",
        subject: "Reading and writing",
        verb: "are",
        reason: "Two distinct activities, 'Reading' and 'writing', are joined by 'and', forming a plural subject that takes the plural verb 'are'."
    },
    {
        sentence: "What I say and what I do are two different things.",
        subject: "What I say and what I do",
        verb: "are",
        reason: "Two separate noun clauses are joined by 'and', creating a plural subject and requiring the plural verb 'are'."
    },
    {
        sentence: "Jogging and swimming are good for the heart.",
        subject: "Jogging and swimming",
        verb: "are",
        reason: "Two gerunds joined by 'and' form a plural subject, requiring the verb 'are'."
    }
  ]
};