import type { RuleCategory, InitialQuizQuestions } from '../types.ts';

export const initialQuizQuestions: InitialQuizQuestions = {
  easy: [
    {
      question: "She ___ to school every day.",
      options: ["walk", "walks", "walking", "walked"],
      correct: 1,
      rule: "Rule 1: The General Rule",
      difficulty: "easy",
      explanation: "The subject 'She' is a third-person singular pronoun, which requires the verb to have an '-s' ending in the present tense. Therefore, 'walks' is the correct verb."
    },
    {
      question: "He ___ finished his homework.",
      options: ["have", "has", "is", "be"],
      correct: 1,
      rule: "Rule 2: Primary Auxiliary Verbs (Be, Have, Do)",
      difficulty: "easy",
      explanation: "The subject 'He' is singular, so it requires the singular auxiliary verb 'has' to form the present perfect tense. 'Have' is used for plural subjects."
    },
    {
      question: "They ___ arrive on time for the show.",
      options: ["musts", "must", "haves to", "shoulds"],
      correct: 1,
      rule: "Rule 3: Modal Auxiliary Verbs",
      difficulty: "easy",
      explanation: "Modal verbs like 'must', 'can', or 'should' do not change their form based on the subject. They are always followed by the base form of the main verb."
    },
    {
      question: "There ___ three cookies left in the jar.",
      options: ["is", "are", "was", "be"],
      correct: 1,
      rule: "Rule 9: Inverted Sentences (There/Here)",
      difficulty: "easy",
      explanation: "In sentences beginning with 'There', the verb agrees with the true subject that follows it. The subject is 'three cookies' (plural), so the plural verb 'are' is correct."
    },
    {
      question: "My cat ___ on the windowsill.",
      options: ["sit", "sits", "are sitting", "have sit"],
      correct: 1,
      rule: "Rule 1: The General Rule",
      difficulty: "easy",
      explanation: "The subject 'My cat' is a third-person singular noun, so the verb needs an '-s' ending in the present tense. 'sits' is correct."
    },
    {
      question: "We ___ happy to see you.",
      options: ["is", "are", "am", "be"],
      correct: 1,
      rule: "Rule 2: Primary Auxiliary Verbs (Be, Have, Do)",
      difficulty: "easy",
      explanation: "The subject 'We' is plural, so it requires the plural auxiliary verb 'are'."
    },
    {
      question: "Here ___ the bus!",
      options: ["come", "comes", "is coming", "are coming"],
      correct: 1,
      rule: "Rule 9: Inverted Sentences (There/Here)",
      difficulty: "easy",
      explanation: "In sentences starting with 'Here', the verb agrees with the true subject that follows it. The subject 'the bus' is singular, so the verb is 'comes'."
    },
    {
      question: "Every child ___ a gift.",
      options: ["get", "gets", "are getting", "have got"],
      correct: 1,
      rule: "Rule 5: Distributive Markers (Each/Every)",
      difficulty: "easy",
      explanation: "The word 'Every' makes the subject ('child') singular, so it requires the singular verb 'gets'."
    },
    {
      question: "I ___ go now.",
      options: ["must", "musts", "have", "has"],
      correct: 0,
      rule: "Rule 3: Modal Auxiliary Verbs",
      difficulty: "easy",
      explanation: "Modal verbs like 'must' do not change their form. They are always followed by the base form of the main verb."
    }
  ],
  medium: [
    {
      question: "The list of items ___ on the table.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 7: Intervening Phrases",
      difficulty: "medium",
      explanation: "The true subject is 'list' (singular), not 'items'. The intervening phrase 'of items' should be ignored. Therefore, the singular verb 'is' is correct."
    },
    {
      question: "Peanut butter and jelly ___ my favorite sandwich.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 4: Compound Subjects Joined by AND",
      difficulty: "medium",
      explanation: "'Peanut butter and jelly' is treated as a single conceptual unit (one type of sandwich). When two subjects form a single idea, a singular verb ('is') is used."
    },
    {
      question: "Each of the players ___ a unique skill.",
      options: ["have", "has", "are having", "is have"],
      correct: 1,
      rule: "Rule 5: Distributive Markers (Each/Every)",
      difficulty: "medium",
      explanation: "The word 'Each' is always singular. The verb must agree with 'Each', not with 'players'. Therefore, the singular verb 'has' is correct."
    },
    {
      question: "Neither the manager nor the employees ___ happy with the decision.",
      options: ["is", "was", "are", "be"],
      correct: 2,
      rule: "Rule 6: Correlative Conjunctions - Proximity Rule (OR/NOR)",
      difficulty: "medium",
      explanation: "According to the proximity rule, when subjects are joined by 'neither...nor', the verb agrees with the subject closest to it. 'Employees' is plural and closest to the verb, so 'are' is correct."
    },
    {
      question: "The CEO, as well as his assistants, ___ attending the conference.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 8: Additive/Parenthetical Phrases",
      difficulty: "medium",
      explanation: "The phrase 'as well as his assistants' is an additive phrase and should be ignored. The verb agrees with the main subject, 'The CEO' (singular), so 'is' is correct."
    },
    {
      question: "Everybody ___ to be loved.",
      options: ["want", "wants", "are wanting", "is want"],
      correct: 1,
      rule: "Rule 10: Singular Indefinite Pronouns",
      difficulty: "medium",
      explanation: "Indefinite pronouns ending in '-body' like 'Everybody' are always singular. Therefore, the verb requires an '-s' ending, making 'wants' correct."
    },
    {
      question: "Some of the water ___ contaminated.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 11: Flexible Quantifiers",
      difficulty: "medium",
      explanation: "For quantifiers like 'some', the verb agrees with the noun that follows. 'Water' is an uncountable noun, which is treated as singular. Thus, 'is' is the correct verb."
    },
    {
      question: "The committee ___ on the new budget proposal tomorrow.",
      options: ["vote", "votes", "are voting", "have voted"],
      correct: 1,
      rule: "Rule 12: Collective Nouns",
      difficulty: "medium",
      explanation: "The collective noun 'committee' is acting as a single, unified group to cast one vote. When acting as a unit, it takes a singular verb, so 'votes' is correct."
    },
    {
      question: "Running and jumping ___ great forms of exercise.",
      options: ["is", "are", "was", "be"],
      correct: 1,
      rule: "Rule 13: Verbal Phrases and Gerunds as Subjects",
      difficulty: "medium",
      explanation: "Two distinct gerunds, 'Running' and 'jumping', are joined by 'and', forming a plural subject. Therefore, the plural verb 'are' is needed."
    },
    {
      question: "Fifty dollars ___ too much for a t-shirt.",
      options: ["is", "are", "were", "be"],
      correct: 0,
      rule: "Rule 14: Measurements, Time, and Money as Units",
      difficulty: "medium",
      explanation: "The amount 'Fifty dollars' is treated as a single sum of money, a singular unit. Therefore, it takes the singular verb 'is'."
    },
    {
      question: "A pair of scissors ___ on the table.",
      options: ["was", "were", "are", "be"],
      correct: 0,
      rule: "Rule 16: Paired Items",
      difficulty: "medium",
      explanation: "The true subject of the sentence is the singular noun 'pair', not 'scissors'. Therefore, the singular verb 'was' is correct."
    },
    {
      question: "All of the cake ___ been eaten.",
      options: ["has", "have", "is", "are"],
      correct: 0,
      rule: "Rule 11: Flexible Quantifiers",
      difficulty: "medium",
      explanation: "The verb agrees with the noun that follows the quantifier. 'Cake' is an uncountable (singular) noun, so the singular verb 'has' is correct."
    },
    {
      question: "The team ___ practicing hard for the game.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      rule: "Rule 12: Collective Nouns",
      difficulty: "medium",
      explanation: "The collective noun 'team' is acting as a single unit, so it requires the singular verb 'is'."
    }
  ],
  hard: [
    {
      question: "The number of applicants ___ strictly limited.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 20: The Number vs A Number",
      difficulty: "hard",
      explanation: "The phrase 'The number of' refers to a single figure and is always treated as a singular subject. It requires the singular verb 'is'."
    },
    {
      question: "The news from the front ___ encouraging.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 15: Nouns Plural in Form but Singular in Meaning",
      difficulty: "hard",
      explanation: "The noun 'news', despite ending in '-s', is always singular. Therefore, it requires the singular verb 'is'."
    },
    {
      question: "He is one of those people who ___ always on time.",
      options: ["is", "are", "be", "was"],
      correct: 1,
      rule: "Rule 17: Relative Pronouns and Antecedents",
      difficulty: "hard",
      explanation: "The relative pronoun 'who' refers to its antecedent, 'people' (plural), not 'one'. Therefore, the verb must be plural, making 'are' the correct choice."
    },
    {
      question: "I wish my boss ___ more understanding.",
      options: ["was", "is", "were", "be"],
      correct: 2,
      rule: "Rule 18: The Subjunctive Mood",
      difficulty: "hard",
      explanation: "This sentence expresses a wish, which is a contrary-to-fact condition. In the subjunctive mood, 'were' is used for all subjects, including singular ones like 'my boss'."
    },
    {
      question: "Seldom ___ we see such a magnificent display of talent.",
      options: ["do", "does", "is", "are"],
      correct: 0,
      rule: "Rule 19: Formal Inversion with Negative Adverbs",
      difficulty: "hard",
      explanation: "When a sentence begins with a negative adverb like 'Seldom', the auxiliary verb comes before the subject. The auxiliary must agree with the subject 'we' (plural), so 'do' is correct."
    },
    {
      question: "What they want ___ a fair chance to compete.",
      options: ["is", "are", "be", "were"],
      correct: 0,
      rule: "Rule 21: Nominal Relative Clauses",
      difficulty: "hard",
      explanation: "The entire noun clause 'What they want' acts as a single, abstract subject. It refers to one idea and is treated as singular, requiring the singular verb 'is'."
    },
    {
      question: "It is I who ___ responsible for this project.",
      options: ["is", "are", "am", "be"],
      correct: 2,
      rule: "Rule 22: Agreement of Person",
      difficulty: "hard",
      explanation: "The verb must agree in person with its antecedent. The relative pronoun 'who' refers to 'I' (first-person singular), so the correct verb is 'am'."
    },
    {
      question: "A number of people ___ complained about the noise.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      rule: "Rule 20: A Number vs The Number",
      difficulty: "hard",
      explanation: "The phrase 'A number of' means 'many' and is always treated as a plural subject, requiring the plural verb 'have'."
    },
    {
      question: "The politician, along with the reporters, ___ expected shortly.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      rule: "Rule 8: Additive/Parenthetical Phrases",
      difficulty: "hard",
      explanation: "The additive phrase 'along with the reporters' should be ignored. The verb agrees with the main subject, 'The politician' (singular), so 'is' is correct."
    },
    {
      question: "If he ___ here, he would know what to do.",
      options: ["was", "were", "is", "be"],
      correct: 1,
      rule: "Rule 18: The Subjunctive Mood",
      difficulty: "hard",
      explanation: "For hypothetical or contrary-to-fact conditions expressed with 'if', the subjunctive mood is used. 'Were' is the correct form for all subjects."
    },
    {
      question: "What you decide to do ___ entirely up to you.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      rule: "Rule 21: Nominal Relative Clauses",
      difficulty: "hard",
      explanation: "The entire noun clause 'What you decide to do' functions as a single, abstract idea and is therefore treated as a singular subject, requiring the verb 'is'."
    },
    {
      question: "Physics, despite its complex theories, ___ a fascinating subject.",
      options: ["remain", "remains", "are remaining", "have remained"],
      correct: 1,
      rule: "Rule 15: Nouns Plural in Form but Singular in Meaning",
      difficulty: "hard",
      explanation: "Nouns for academic subjects like 'Physics' are singular, even though they end in -s. The intervening phrase does not change this. Thus, the singular verb 'remains' is correct."
    }
  ]
};

export const ruleCategories: RuleCategory[] = [
    {
      title: "I. Core Principles and Foundational Rules",
      color: "bg-blue-100 border-blue-200",
      icon: "📚",
      rules: [
        {
          id: 1,
          name: "Rule 1: The General Rule",
          formula: "Singular Subject ➜ Verb + s/es | Plural/I/You ➜ Base Verb",
          explanation: "Singular subjects in the third person (she, he, it, singular nouns) require verbs ending in -s in present tense. Plural subjects, I, or You take the base form of the verb.",
          examples: [
            {
              sentence: "She walks to school every day.",
              subject: "She",
              verb: "walks",
              reason: "'She' is a singular, third-person pronoun, so the verb 'walks' needs an '-s' ending."
            },
            {
              sentence: "The cat runs across the yard.",
              subject: "The cat",
              verb: "runs",
              reason: "'The cat' is a singular subject, so the verb 'runs' ends in '-s'."
            },
            {
              sentence: "David writes novels for a living.",
              subject: "David",
              verb: "writes",
              reason: "A proper noun like 'David' is a singular, third-person subject, requiring the verb 'writes'."
            },
            {
              sentence: "They run every day.",
              subject: "They",
              verb: "run",
              reason: "'They' is a plural subject, so it takes the base form of the verb, 'run'."
            },
            {
              sentence: "I run to the store.",
              subject: "I",
              verb: "run",
              reason: "The first-person pronoun 'I' takes the base form of the verb, 'run'."
            },
            {
              sentence: "You walk quickly.",
              subject: "You",
              verb: "walk",
              reason: "The second-person pronoun 'You' takes the base form of the verb, 'walk'."
            },
            {
              sentence: "The earth goes round the sun.",
              subject: "The earth",
              verb: "goes",
              reason: "'The earth' is a singular subject, so the verb 'goes' needs an '-es' ending."
            },
            {
              sentence: "My sister teaches.",
              subject: "My sister",
              verb: "teaches",
              reason: "'My sister' is a singular, third-person subject, so the verb 'teaches' needs an '-es' ending."
            },
            {
              sentence: "Nurses look after patients.",
              subject: "Nurses",
              verb: "look",
              reason: "'Nurses' is a plural subject, so it takes the base form of the verb, 'look'."
            }
          ],
          quiz: [
            {
              question: "She ___ to school every day.",
              options: ["walk", "walks", "walking", "walked"],
              correct: 1,
              difficulty: "easy",
              explanation: "The subject 'She' is a third-person singular pronoun, which requires the verb to have an '-s' ending in the present tense. Therefore, 'walks' is the correct verb."
            },
            {
              question: "The dogs ___ loudly in the yard.",
              options: ["bark", "barks", "is barking", "has barked"],
              correct: 0,
              difficulty: "easy",
              explanation: "The subject 'The dogs' is plural, so it takes the base form of the verb, 'bark'."
            },
            {
              question: "It ___ like a good idea.",
              options: ["seem", "seems", "are seeming", "have seemed"],
              correct: 1,
              difficulty: "easy",
              explanation: "The subject 'It' is a third-person singular pronoun, requiring the verb to end in '-s'. 'Seems' is correct."
            },
            {
                question: "They ___ to the beach every summer.",
                options: ["go", "goes", "going", "gone"],
                correct: 0,
                difficulty: "easy",
                explanation: "The subject 'They' is plural, so it takes the base form of the verb, 'go'."
            },
            {
                question: "A bird ___ in the tree.",
                options: ["sing", "sings", "are singing", "have sung"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'A bird' is singular, so the verb needs an '-s' ending. 'sings' is correct."
            },
            {
                question: "You ___ very kind.",
                options: ["is", "are", "am", "be"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'You' always takes a plural verb form, so 'are' is correct."
            },
            {
                question: "My brother ___ video games.",
                options: ["play", "plays", "are playing", "have played"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'My brother' is singular, so the verb requires an '-s' ending. 'plays' is correct."
            },
            {
                question: "The flowers ___ beautiful.",
                options: ["look", "looks", "is looking", "has looked"],
                correct: 0,
                difficulty: "easy",
                explanation: "The subject 'The flowers' is plural, so it takes the base form of the verb, 'look'."
            },
            {
                question: "I ___ milk every morning.",
                options: ["drinks", "drink", "is drinking", "has drank"],
                correct: 1,
                difficulty: "easy",
                explanation: "The first-person pronoun 'I' takes the base form of the verb, 'drink'."
            },
            {
                question: "He ___ his bike to work.",
                options: ["ride", "rides", "are riding", "have ridden"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'He' is a third-person singular pronoun, so the verb ends in '-s'. 'rides' is correct."
            },
            {
                question: "We ___ a big family.",
                options: ["is", "are", "has", "have"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'We' is plural, so it requires the plural verb 'are'."
            },
            {
                question: "The sun ___ brightly.",
                options: ["shine", "shines", "are shining", "have shone"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'The sun' is a singular noun, requiring the verb to end in '-s'. 'shines' is correct."
            },
            {
                question: "The children ___ in the park.",
                options: ["plays", "play", "is playing", "has played"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'The children' is a plural noun, so it takes the base form of the verb, 'play'."
            },
            {
                question: "An apple ___ good for you.",
                options: ["is", "are", "be", "have"],
                correct: 0,
                difficulty: "easy",
                explanation: "The subject 'An apple' is singular, so it requires the singular verb 'is'."
            },
            {
                question: "The teacher ___ the lesson.",
                options: ["explain", "explains", "are explaining", "have explained"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'The teacher' is a singular noun, so the verb needs an '-s' ending. 'explains' is correct."
            },
            {
                question: "Computers ___ our lives easier.",
                options: ["makes", "make", "is making", "has made"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'Computers' is plural, so it requires the base form of the verb, 'make'."
            },
            {
                question: "She ___ three languages.",
                options: ["speak", "speaks", "is speaking", "have spoken"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'She' is a third-person singular pronoun, so the verb ends in '-s'. 'speaks' is correct."
            },
            {
                question: "My parents ___ in a small house.",
                options: ["live", "lives", "is living", "have lived"],
                correct: 0,
                difficulty: "easy",
                explanation: "The subject 'My parents' is plural, so it takes the base form of the verb, 'live'."
            },
            {
                question: "The baby ___ when it's hungry.",
                options: ["cry", "cries", "are crying", "have cried"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'The baby' is a singular noun, so the verb needs an '-es' ending. 'cries' is correct."
            },
            {
                question: "Those monkeys ___ bananas.",
                options: ["eats", "eat", "is eating", "has eaten"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'Those monkeys' is plural, so it takes the base form of the verb, 'eat'."
            },
            {
                question: "The train ___ at 8 AM.",
                options: ["arrive", "arrives", "are arriving", "have arrived"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'The train' is singular, so the verb needs an '-s' ending. 'arrives' is correct."
            },
            {
                question: "The stars ___ at night.",
                options: ["twinkle", "twinkles", "is twinkling", "has twinkled"],
                correct: 0,
                difficulty: "easy",
                explanation: "The subject 'The stars' is plural, so it takes the base form of the verb, 'twinkle'."
            },
            {
                question: "His cat ___ a lot.",
                options: ["sleep", "sleeps", "are sleeping", "have slept"],
                correct: 1,
                difficulty: "easy",
                explanation: "The subject 'His cat' is singular, so the verb ends in '-s'. 'sleeps' is correct."
            },
            {
              question: "My best friend ___ next door.",
              options: ["live", "lives", "is living", "have lived"],
              correct: 1,
              difficulty: "medium",
              explanation: "The subject 'My best friend' is a single person (singular), so it requires the verb form 'lives'."
            },
            {
              question: "A flock of birds ___ south for the winter.",
              options: ["fly", "flies", "are flying", "is fly"],
              correct: 1,
              difficulty: "medium",
              explanation: "The subject is 'flock' (a collective noun acting as a single unit), which is singular. Therefore, it requires the singular verb 'flies'."
            },
            {
              question: "The information you provided ___ helpful.",
              options: ["was", "were", "are", "be"],
              correct: 0,
              difficulty: "medium",
              explanation: "The subject 'information' is an uncountable noun, which is always treated as singular. Therefore, the singular verb 'was' is correct."
            },
            {
                question: "The team ___ hard every day.",
                options: ["practice", "practices", "are practicing", "have practiced"],
                correct: 1,
                difficulty: "medium",
                explanation: "The collective noun 'team' is acting as a single unit, which makes it a singular subject requiring the verb 'practices'."
            },
            {
                question: "The herd of elephants ___ towards the river.",
                options: ["move", "moves", "are moving", "have moved"],
                correct: 1,
                difficulty: "medium",
                explanation: "The subject is 'herd' (singular), not 'elephants'. Therefore, it requires the singular verb 'moves'."
            },
            {
                question: "The quality of these apples ___ poor.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'quality' (singular), not 'apples'. The verb must be singular, so 'is' is correct."
            },
            {
                question: "All of the furniture ___ new.",
                options: ["looks", "look", "are looking", "have looked"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject 'furniture' is an uncountable noun, which is always treated as singular. Therefore, the verb is 'looks'."
            },
            {
                question: "The pack of wolves ___ at the moon.",
                options: ["howl", "howls", "are howling", "have howled"],
                correct: 1,
                difficulty: "medium",
                explanation: "The true subject is the collective noun 'pack' (singular), so the verb must be 'howls'."
            },
            {
                question: "The advice you gave me ___ very helpful.",
                options: ["was", "were", "are", "be"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject 'advice' is an uncountable noun, which is always singular. Thus, 'was' is correct."
            },
            {
                question: "The man with the yellow hat ___ over there.",
                options: ["stands", "stand", "are standing", "have stood"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'man' (singular). The intervening phrase 'with the yellow hat' does not change the subject. The verb is 'stands'."
            },
            {
                question: "The group of tourists ___ lost.",
                options: ["seems", "seem", "are seeming", "have seemed"],
                correct: 0,
                difficulty: "medium",
                explanation: "The collective noun 'group' is acting as a single unit, so it requires the singular verb 'seems'."
            },
            {
                question: "The smell of the flowers ___ the room.",
                options: ["fill", "fills", "are filling", "have filled"],
                correct: 1,
                difficulty: "medium",
                explanation: "The true subject is 'smell' (singular), not 'flowers'. The verb must be singular, so 'fills' is correct."
            },
            {
                question: "The captain of the guards ___ his post.",
                options: ["patrol", "patrols", "are patrolling", "has patrolled"],
                correct: 1,
                difficulty: "medium",
                explanation: "The subject is 'captain' (singular). The phrase 'of the guards' is an intervening phrase. The verb is 'patrols'."
            },
            {
                question: "The collection of rare stamps ___ a lot of money.",
                options: ["is worth", "are worth", "worth", "have worth"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'collection' (singular), which requires the singular verb phrase 'is worth'."
            },
            {
                question: "Patience ___ a virtue.",
                options: ["is", "are", "be", "have"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject 'Patience' is an uncountable noun and is treated as singular, requiring the verb 'is'."
            },
            {
                question: "A bag of groceries ___ on the counter.",
                options: ["sits", "sit", "are sitting", "have sat"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'bag' (singular), not 'groceries'. Therefore, the singular verb 'sits' is correct."
            },
            {
                question: "The traffic ___ bad during rush hour.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject 'traffic' is an uncountable noun, which is always singular. So, 'is' is correct."
            },
            {
                question: "My knowledge of cars ___ limited.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'knowledge' (uncountable and singular), not 'cars'. The verb must be 'is'."
            },
            {
                question: "The main reason for his mistakes ___ a lack of focus.",
                options: ["was", "were", "are", "be"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'reason' (singular), so it requires the singular verb 'was'."
            },
            {
                question: "The leader of the protestors ___ to the crowd.",
                options: ["speak", "speaks", "are speaking", "has spoken"],
                correct: 1,
                difficulty: "medium",
                explanation: "The subject is the singular noun 'leader', so the verb must be 'speaks'."
            },
            {
                question: "His performance in all the recent games ___ been outstanding.",
                options: ["has", "have", "is", "are"],
                correct: 0,
                difficulty: "medium",
                explanation: "The true subject is 'performance' (singular), not 'games'. It requires the singular auxiliary verb 'has'."
            },
            {
                question: "The painting with the bright colors ___ my attention.",
                options: ["catch", "catches", "are catching", "have caught"],
                correct: 1,
                difficulty: "medium",
                explanation: "The subject is 'painting' (singular). The intervening phrase 'with the bright colors' doesn't affect the verb. Thus, 'catches' is correct."
            },
            {
              question: "The constant humming from the many refrigerators ___ me crazy.",
              options: ["drive", "drives", "are driving", "have driven"],
              correct: 1,
              difficulty: "hard",
              explanation: "The true subject is the singular gerund 'humming', not the plural noun 'refrigerators'. Therefore, it requires the singular verb 'drives'."
            },
            {
                question: "The effects of the new policy ___ yet to be seen.",
                options: ["is", "are", "was", "be"],
                correct: 1,
                difficulty: "hard",
                explanation: "The subject of the sentence is 'effects', which is plural. Therefore, it requires the plural verb 'are'."
            },
            {
                question: "The rhythm of the drums ___ the dancers.",
                options: ["captivate", "captivates", "are captivating", "have captivated"],
                correct: 1,
                difficulty: "hard",
                explanation: "The true subject is 'rhythm' (singular), not 'drums'. The verb must agree with 'rhythm', so 'captivates' is correct."
            },
            {
                question: "The mayor, who has been in office for ten years and is known for his speeches, ___ the crowd tomorrow.",
                options: ["address", "addresses", "are addressing", "have addressed"],
                correct: 1,
                difficulty: "hard",
                explanation: "The subject is 'The mayor' (singular). The long clause between the subject and verb is an interrupter. The verb must be 'addresses'."
            },
            {
                question: "The complexity of the various issues discussed at the meetings ___ overwhelming.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The true subject is 'complexity' (singular), not 'issues' or 'meetings'. Therefore, it requires the singular verb 'is'."
            },
            {
                question: "Learning the rules of several different board games ___ a lot of time.",
                options: ["take", "takes", "are taking", "have taken"],
                correct: 1,
                difficulty: "hard",
                explanation: "The subject is the entire gerund phrase 'Learning the rules...', which is treated as a single activity. This makes the subject singular, requiring 'takes'."
            },
            {
                question: "The source of all the company's problems, from sales to marketing, ___ poor management.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'source' (singular). The intervening phrases do not change this. The verb must be 'is'."
            },
            {
                question: "A detailed analysis of the sales figures ___ a decline in profits.",
                options: ["reveal", "reveals", "are revealing", "have revealed"],
                correct: 1,
                difficulty: "hard",
                explanation: "The subject is 'analysis' (singular), not 'figures'. Therefore, the singular verb 'reveals' is correct."
            },
            {
                question: "The set of antique knives, which my grandmother gave me, ___ in a special drawer.",
                options: ["is kept", "are kept", "keep", "keeps"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'set' (singular), not 'knives'. It requires the singular verb phrase 'is kept'."
            },
            {
                question: "The belief that all people are created equal ___ a fundamental principle.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'The belief' (singular). The noun clause that follows it does not affect the main verb, which must be 'is'."
            },
            {
                question: "The sound of the crashing waves on the shore ___ a calming effect.",
                options: ["has", "have", "is", "are"],
                correct: 0,
                difficulty: "hard",
                explanation: "The true subject is 'sound' (singular), not 'waves'. It requires the singular verb 'has'."
            },
            {
                question: "The success of our projects ___ on effective teamwork.",
                options: ["depend", "depends", "are depending", "have depended"],
                correct: 1,
                difficulty: "hard",
                explanation: "The subject is 'success' (singular), not 'projects'. Therefore, the verb must be 'depends'."
            },
            {
                question: "The satisfaction derived from helping others ___ its own reward.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is the uncountable noun 'satisfaction' (singular), so the verb must be 'is'."
            },
            {
                question: "The politician, accompanied by his wife and three advisors, ___ about to enter the building.",
                options: ["was", "were", "are", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'The politician' (singular). The additive phrase 'accompanied by...' is an interrupter and must be ignored. The verb is 'was'."
            },
            {
                question: "The wear and tear on the machinery over the years ___ it less efficient.",
                options: ["make", "makes", "are making", "have made"],
                correct: 1,
                difficulty: "hard",
                explanation: "The phrase 'wear and tear' is a single concept, treated as a singular subject. Therefore, the verb is 'makes'."
            },
            {
                question: "The writer's understanding of human relationships ___ her novels so compelling.",
                options: ["make", "makes", "are making", "have made"],
                correct: 1,
                difficulty: "hard",
                explanation: "The true subject is 'understanding' (singular), not 'relationships'. The verb must be 'makes'."
            },
            {
                question: "The cost of all these new regulations ___ passed on to the consumer.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'cost' (singular), not 'regulations'. The singular verb 'is' is correct."
            },
            {
                question: "The state of the art in modern robotics ___ advancing rapidly.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is the singular noun 'state', not 'art' or 'robotics'. The verb must be 'is'."
            },
            {
                question: "The fear of spiders, which many people share, ___ known as arachnophobia.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'fear' (singular), so the verb must be 'is'."
            },
            {
                question: "The development of new, high-speed trains ___ travel between cities.",
                options: ["revolutionize", "revolutionizes", "are revolutionizing", "have revolutionized"],
                correct: 1,
                difficulty: "hard",
                explanation: "The subject is 'development' (singular), not 'trains'. Therefore, the verb is 'revolutionizes'."
            },
            {
                question: "The book's introduction, filled with historical context and character backgrounds, ___ essential reading.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The true subject is 'introduction' (singular). The long intervening phrase must be ignored. The verb is 'is'."
            },
            {
                question: "The perspective of the villagers, whose homes were affected by the dam, ___ largely ignored.",
                options: ["was", "were", "are", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'perspective' (singular), not 'villagers' or 'homes'. It requires the singular verb 'was'."
            },
            {
                question: "The consensus among the scientists ___ that the climate is changing.",
                options: ["is", "are", "were", "be"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject is 'consensus' (singular), so the verb must be 'is'."
            }
          ]
        },
        {
          id: 2,
          name: "Rule 2: Primary Auxiliary Verbs (Be, Have, Do)",
          formula: "Subject ➜ Auxiliary Verb (matches number & person)",
          explanation: "Primary helping verbs like is/are, has/have, and does/do must strictly agree with the subject in number and person.",
          examples: [
            {
                sentence: "She is a talented musician.",
                subject: "She",
                verb: "is",
                reason: "'She' is a singular subject, requiring the singular auxiliary verb 'is'."
            },
            {
                sentence: "The dogs are barking loudly.",
                subject: "dogs",
                verb: "are",
                reason: "'dogs' is a plural subject, requiring the plural auxiliary verb 'are'."
            },
            {
                sentence: "Swetha has a pet dog.",
                subject: "Swetha",
                verb: "has",
                reason: "'Swetha' is a singular subject, so it requires the singular auxiliary verb 'has'."
            },
            {
                sentence: "I have a younger brother.",
                subject: "I",
                verb: "have",
                reason: "The first-person pronoun 'I' takes the auxiliary verb 'have'."
            },
            {
                sentence: "He does not understand the concept.",
                subject: "He",
                verb: "does",
                reason: "'He' is a singular, third-person pronoun, requiring the singular auxiliary 'does'."
            },
            {
                sentence: "They do not have the necessary equipment.",
                subject: "They",
                verb: "do",
                reason: "'They' is a plural subject, so it takes the plural auxiliary verb 'do'."
            },
            {
                sentence: "Rarely does he arrive late.",
                subject: "he",
                verb: "does",
                reason: "In this inverted sentence, the auxiliary 'does' agrees with the singular subject 'he'."
            }
          ],
          quiz: [
            {
              question: "He ___ finished his homework.",
              options: ["have", "has", "is", "be"],
              correct: 1,
              difficulty: "easy",
              explanation: "The subject 'He' is singular, so it requires the singular auxiliary verb 'has' to form the present perfect tense. 'Have' is used for plural subjects."
            },
            {
              question: "We ___ going to the park.",
              options: ["is", "are", "am", "be"],
              correct: 1,
              difficulty: "easy",
              explanation: "The subject 'We' is plural, requiring the plural auxiliary verb 'are'."
            },
            {
              question: "My sister ___ not like spinach.",
              options: ["do", "does", "is", "has"],
              correct: 1,
              difficulty: "easy",
              explanation: "The subject 'My sister' is singular, so it requires the singular auxiliary verb 'does'."
            },
            {
              question: "Why ___ you late for the meeting yesterday?",
              options: ["are", "is", "was", "were"],
              correct: 3,
              difficulty: "medium",
              explanation: "The subject 'you' always takes the plural form of the verb, which in the past tense is 'were'."
            },
            {
              question: "The children ___ been playing for hours.",
              options: ["has", "have", "is", "are"],
              correct: 1,
              difficulty: "medium",
              explanation: "The subject 'The children' is plural, so it requires the plural auxiliary verb 'have'."
            },
            {
              question: "___ she finished her chores?",
              options: ["Has", "Have", "Do", "Does"],
              correct: 0,
              difficulty: "medium",
              explanation: "The subject 'she' is singular, requiring the singular auxiliary verb 'Has' to form the present perfect question."
            },
            {
              question: "___ either of the candidates arrived yet?",
              options: ["Has", "Have", "Is", "Are"],
              correct: 0,
              difficulty: "hard",
              explanation: "The subject of the sentence is 'either', which is a singular indefinite pronoun. Therefore, it requires the singular auxiliary verb 'Has'."
            },
            {
                question: "The results of the experiment ___ not support the hypothesis.",
                options: ["do", "does", "is", "are"],
                correct: 0,
                difficulty: "hard",
                explanation: "The true subject is 'results' (plural), not 'experiment'. Therefore, it requires the plural auxiliary verb 'do'."
            },
            {
                question: "There ___ been many attempts to solve the puzzle.",
                options: ["has", "have", "is", "are"],
                correct: 1,
                difficulty: "hard",
                explanation: "In sentences starting with 'There', the verb agrees with the true subject that follows. The subject is 'many attempts' (plural), so 'have' is correct."
            }
          ]
        },
        {
          id: 3,
          name: "Rule 3: Modal Auxiliary Verbs",
          formula: "Any Subject ➜ Modal (can, will...) + Base Verb",
          explanation: "Modal verbs (can, must, should, will, might) never change their form based on the subject. They always use the base form of the main verb.",
          examples: [
            {
                sentence: "She must schedule an appointment.",
                subject: "She",
                verb: "must schedule",
                reason: "The modal verb 'must' does not change form. It is followed by the base verb 'schedule', agreeing with the singular subject 'She'."
            },
            {
                sentence: "We will see you tomorrow.",
                subject: "We",
                verb: "will see",
                reason: "The modal 'will' is invariable and is followed by the base verb 'see', even with the plural subject 'We'."
            },
            {
                sentence: "My friend might come.",
                subject: "My friend",
                verb: "might come",
                reason: "The modal verb 'might' stays the same regardless of the subject and is followed by the base verb 'come'."
            },
            {
                sentence: "You should come.",
                subject: "You",
                verb: "should come",
                reason: "Modal verbs like 'should' are invariable and are used with the base form of the main verb."
            },
            {
                sentence: "They can drive.",
                subject: "They",
                verb: "can drive",
                reason: "The modal 'can' does not change for the plural subject 'They' and is followed by the base verb 'drive'."
            },
            {
                sentence: "My daughters may watch television.",
                subject: "My daughters",
                verb: "may watch",
                reason: "The modal verb 'may' remains the same for the plural subject 'My daughters' and is followed by the base verb 'watch'."
            }
          ],
          quiz: [
            {
              question: "They ___ arrive on time for the show.",
              options: ["musts", "must", "haves to", "shoulds"],
              correct: 1,
              difficulty: "easy",
              explanation: "Modal verbs like 'must', 'can', or 'should' do not change their form based on the subject. They are always followed by the base form of the main verb."
            },
            {
                question: "You ___ finish your homework.",
                options: ["should", "shoulds", "to should", "shoulded"],
                correct: 0,
                difficulty: "easy",
                explanation: "Modal verbs like 'should' do not change form based on the subject and are followed by the base verb."
            },
            {
                question: "He ___ be there by 5 PM.",
                options: ["will", "wills", "willing", "is will"],
                correct: 0,
                difficulty: "easy",
                explanation: "The modal verb 'will' does not change for the singular subject 'He' and is followed by the base verb 'be'."
            },
            {
              question: "She feels ill, so she ___ see a doctor.",
              options: ["ought to", "must to", "should to", "will to"],
              correct: 0,
              difficulty: "medium",
              explanation: "'Ought to' is a complete modal phrase. The others are grammatically incorrect as modals are not followed by 'to' (except for 'ought to' and 'have to')."
            },
            {
                question: "The engine sounds strange; it ___ need to be checked.",
                options: ["might", "must", "can", "should"],
                correct: 0,
                difficulty: "medium",
                explanation: "'Might' expresses possibility, which is the most appropriate meaning in this context. Modal verbs are followed by the base verb 'need'."
            },
            {
                question: "One ___ always try to do one's best.",
                options: ["should", "must", "can", "may"],
                correct: 0,
                difficulty: "medium",
                explanation: "'Should' is used to express a moral obligation or recommendation, which fits the context of the sentence."
            },
            {
              question: "He insisted that the package ___ be delivered today.",
              options: ["would", "should", "must", "might"],
              correct: 1,
              difficulty: "hard",
              explanation: "In formal clauses expressing insistence, demand, or recommendation, the modal 'should' is often used, followed by the base form of the verb. 'He insisted that the package should be delivered.'"
            },
            {
                question: "If you had studied, you ___ have passed the exam.",
                options: ["would", "should", "must", "shall"],
                correct: 0,
                difficulty: "hard",
                explanation: "This is a third conditional sentence structure, which expresses a hypothetical past situation. 'Would have' is used to describe the hypothetical past result."
            },
            {
                question: "Lest we forget, we ___ honor their sacrifice.",
                options: ["should", "would", "could", "must"],
                correct: 0,
                difficulty: "hard",
                explanation: "In formal English, the conjunction 'lest' is often followed by 'should' to express a desire to prevent something from happening (in this case, forgetting)."
            }
          ]
        }
      ]
    },
    {
      title: "II. Compound Subjects and Conjunctions",
      color: "bg-emerald-100 border-emerald-200",
      icon: "🔗",
      rules: [
        {
          id: 4,
          name: "Rule 4: Compound Subjects Joined by AND",
          formula: "S1 + AND + S2 ➜ Plural Verb | Single Unit Concept ➜ Singular Verb",
          explanation: "When AND connects two separate items, they form a plural subject. BUT if the two nouns refer to a single conceptual unit, fixed phrase, or the same person, the verb is singular.",
          examples: [
            {
                sentence: "My mom and dad work late.",
                subject: "My mom and dad",
                verb: "work",
                reason: "Two distinct subjects ('mom' and 'dad') joined by 'and' form a plural subject, requiring the plural verb 'work'."
            },
            {
                sentence: "Time and effort are needed to succeed.",
                subject: "Time and effort",
                verb: "are",
                reason: "'Time' and 'effort' are two separate concepts joined by 'and', making the subject plural and requiring the verb 'are'."
            },
            {
                sentence: "The owner and manager is speaking.",
                subject: "The owner and manager",
                verb: "is",
                reason: "Since 'the owner and manager' refers to a single person holding both roles, the subject is singular and takes the verb 'is'."
            },
            {
                sentence: "The owner and the manager are speaking.",
                subject: "The owner and the manager",
                verb: "are",
                reason: "The repetition of 'the' before 'manager' signals that 'the owner' and 'the manager' are two different people. This creates a plural subject, which requires the plural verb 'are'."
            },
            {
                sentence: "Bread and butter is a staple.",
                subject: "Bread and butter",
                verb: "is",
                reason: "'Bread and butter' is treated as a single conceptual unit or dish, so it takes the singular verb 'is'."
            },
            {
                sentence: "Macaroni and cheese is a popular comfort food.",
                subject: "Macaroni and cheese",
                verb: "is",
                reason: "Like 'fish and chips', 'macaroni and cheese' refers to a single dish, making it a singular subject."
            },
            {
                sentence: "Fish and chips is popular in England.",
                subject: "Fish and chips",
                verb: "is",
                reason: "'Fish and chips' is a single dish, a singular concept, requiring the singular verb 'is'."
            }
          ],
          quiz: [
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
          ]
        },
        {
          id: 5,
          name: "Rule 5: Distributive Markers (Each/Every)",
          formula: "Each/Every + Subject(s) ➜ Singular Verb",
          explanation: "The words each and every make the subject focus on individual units, requiring a singular verb even when multiple nouns are joined by AND.",
          examples: [
            {
                sentence: "Every man and woman is required to check in.",
                subject: "Every man and woman",
                verb: "is",
                reason: "The word 'Every' makes the compound subject singular, requiring the singular verb 'is'."
            },
            {
                sentence: "Each dog and cat at the shelter is vaccinated.",
                subject: "Each dog and cat",
                verb: "is",
                reason: "The word 'Each' treats the subjects individually, making the overall subject singular and requiring the verb 'is'."
            },
            {
                sentence: "Each of the students has a locker.",
                subject: "Each",
                verb: "has",
                reason: "The pronoun 'Each' is the true subject and is always singular, so it takes the singular verb 'has'."
            },
             {
                sentence: "Each of the answers is correct.",
                subject: "Each",
                verb: "is",
                reason: "The true subject is 'Each', not 'answers'. 'Each' is singular, so the verb is 'is'."
            },
            {
                sentence: "Each senator and congressman was allocated two seats.",
                subject: "Each senator and congressman",
                verb: "was",
                reason: "'Each' makes the subject singular, even though two nouns are listed, so the singular verb 'was' is used."
            },
            {
                sentence: "Every adult and child was wearing a flag.",
                subject: "Every adult and child",
                verb: "was",
                reason: "'Every' makes the subject singular, requiring the singular verb 'was'."
            }
          ],
          quiz: [
            {
              question: "Every student ___ a textbook.",
              options: ["has", "have", "are having", "is have"],
              correct: 0,
              difficulty: "easy",
              explanation: "The word 'Every' makes the subject 'student' singular, so it requires the singular verb 'has'."
            },
            {
                question: "Each apple ___ juicy.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The word 'Each' makes the subject 'apple' singular, requiring the singular verb 'is'."
            },
            {
                question: "Every car on the street ___ red.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "'Every' modifies the singular subject 'car', so the verb must also be singular ('is')."
            },
            {
              question: "Each of the players ___ a unique skill.",
              options: ["have", "has", "are having", "is have"],
              correct: 1,
              difficulty: "medium",
              explanation: "The word 'Each' is always singular. The verb must agree with 'Each', not with 'players'. Therefore, the singular verb 'has' is correct."
            },
            {
                question: "Every book and magazine on the shelf ___ been read.",
                options: ["has", "have", "is", "are"],
                correct: 0,
                difficulty: "medium",
                explanation: "Even with a compound subject joined by 'and', the word 'Every' makes the entire subject singular. Thus, 'has' is the correct verb."
            },
            {
                question: "Each of the candidates ___ to give a speech.",
                options: ["has", "have", "are", "is"],
                correct: 0,
                difficulty: "medium",
                explanation: "The pronoun 'Each' is the true subject and is always singular. It requires the singular verb 'has'."
            },
            {
              question: "Each senator and representative ___ given a single vote on the matter.",
              options: ["was", "were", "are", "be"],
              correct: 0,
              difficulty: "hard",
              explanation: "The word 'Each' makes the entire compound subject singular, even though two nouns are listed. Therefore, the singular verb 'was' is correct."
            },
            {
                question: "Each of the problems, however difficult they may seem, ___ a solution.",
                options: ["has", "have", "are having", "is have"],
                correct: 0,
                difficulty: "hard",
                explanation: "The true subject is 'Each', which is always singular. The intervening clauses must be ignored. Therefore, the singular verb 'has' is correct."
            },
            {
                question: "Every twist and turn of the plot ___ the audience.",
                options: ["surprise", "surprises", "are surprising", "have surprised"],
                correct: 1,
                difficulty: "hard",
                explanation: "The word 'Every' makes the compound subject 'twist and turn' singular, as it refers to each one individually. Thus, the verb needs an '-s': 'surprises'."
            }
          ]
        },
        {
          id: 6,
          name: "Rule 6: Correlative Conjunctions - Proximity Rule (OR/NOR)",
          formula: "S1 or/nor S2 ➜ Verb agrees with S2 (nearest)",
          explanation: "When subjects are joined by or, nor, either...or, neither...nor, the verb agrees with the subject element physically closest to it. This applies regardless of which subject is singular or plural.",
          examples: [
            {
                sentence: "Neither the students nor the professor wants to reschedule.",
                subject: "the professor",
                verb: "wants",
                reason: "With 'neither...nor', the verb 'wants' agrees with the closest subject, which is the singular 'professor'."
            },
            {
                sentence: "Neither the professor nor the students want to reschedule.",
                subject: "the students",
                verb: "want",
                reason: "According to the proximity rule, the verb 'want' agrees with the nearer subject, the plural 'students'."
            },
            {
                sentence: "Either my shoes or your coat is always on the floor.",
                subject: "your coat",
                verb: "is",
                reason: "The verb 'is' agrees with the singular subject 'coat', which is closer to it than the plural subject 'shoes'."
            },
            {
                sentence: "The boy or his friends run every day.",
                subject: "his friends",
                verb: "run",
                reason: "When using 'or', the verb 'run' agrees with the closest subject, 'his friends', which is plural."
            },
            {
                sentence: "Either the Mayor or her deputy is bound to come.",
                subject: "her deputy",
                verb: "is",
                reason: "With 'either...or', the verb 'is' agrees with the nearer subject, the singular 'her deputy'."
            },
            {
                sentence: "Not Bob but his brothers walk to the store.",
                subject: "his brothers",
                verb: "walk",
                reason: "The verb 'walk' agrees with the subject closest to it, 'his brothers' (plural)."
            },
            {
                sentence: "Not Bob but his brother walks to the store.",
                subject: "his brother",
                verb: "walks",
                reason: "The verb 'walks' agrees with the singular subject 'his brother', which is closer to it."
            }
          ],
          quiz: [
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
          ]
        }
      ]
    },
    {
      title: "III. Proximity Traps and Inverted Structures",
      color: "bg-amber-100 border-amber-200",
      icon: "⚠️",
      rules: [
        {
          id: 7,
          name: "Rule 7: Ignoring Intervening Phrases",
          formula: "Main Subject ... (phrase) ... ➜ Verb agrees with Main Subject",
          explanation: "Phrases between the subject and verb (prepositional phrases, clarifying information) must be ignored. The verb agrees only with the main subject.",
          examples: [
            {
                sentence: "The list of rules is confusing.",
                subject: "list",
                verb: "is",
                reason: "The verb 'is' agrees with the main subject 'list' (singular), not the noun 'rules' in the prepositional phrase 'of rules'."
            },
            {
                sentence: "The sound of the bells is loud.",
                subject: "sound",
                verb: "is",
                reason: "The singular subject 'sound' determines the verb 'is', not the plural noun 'bells' in the intervening phrase."
            },
            {
                sentence: "The box of old letters, containing photographs from the war, was finally opened.",
                subject: "box",
                verb: "was",
                reason: "The true subject is 'box' (singular). The long phrase in the middle does not change the verb, which must be 'was'."
            },
            {
                sentence: "The bouquet of flowers was beautiful.",
                subject: "bouquet",
                verb: "was",
                reason: "The verb 'was' agrees with the singular subject 'bouquet', ignoring the phrase 'of flowers'."
            },
            {
                sentence: "One of the boxes is open.",
                subject: "One",
                verb: "is",
                reason: "The true subject is 'One', which is singular and requires the verb 'is'."
            },
            {
                sentence: "The woman with all the dogs walks down my street.",
                subject: "woman",
                verb: "walks",
                reason: "The singular subject 'woman' takes the verb 'walks'. The phrase 'with all the dogs' does not affect the verb."
            }
          ],
          quiz: [
            {
              question: "One of my friends ___ coming to visit.",
              options: ["is", "are", "be", "were"],
              correct: 0,
              difficulty: "easy",
              explanation: "The subject is 'One' (singular), not 'friends'. The phrase 'of my friends' is an intervening phrase. Therefore, the singular verb 'is' is correct."
            },
            {
                question: "The color of the walls ___ too bright.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The verb must agree with the subject 'color' (singular), not 'walls'. The singular verb 'is' is correct."
            },
            {
                question: "The key to the cabinets ___ missing.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The subject is 'key' (singular), so the verb must also be singular. The phrase 'to the cabinets' should be ignored."
            },
            {
              question: "The list of items ___ on the table.",
              options: ["are", "is", "were", "be"],
              correct: 1,
              difficulty: "medium",
              explanation: "The true subject is 'list' (singular), not 'items'. The intervening phrase 'of items' should be ignored. Therefore, the singular verb 'is' is correct."
            },
            {
                question: "The attitude of the students ___ changing.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The verb agrees with the main subject 'attitude' (singular), not the noun 'students' in the prepositional phrase."
            },
            {
                question: "A crate of oranges ___ delivered yesterday.",
                options: ["was", "were", "is", "are"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'crate' (singular), not 'oranges'. Therefore, the singular verb 'was' is correct."
            },
            {
              question: "The woman with all the cats ___ in that large, old house.",
              options: ["live", "lives", "are living", "have lived"],
              correct: 1,
              difficulty: "hard",
              explanation: "The subject is the singular noun 'woman'. The prepositional phrase 'with all the cats' must be ignored. Thus, the verb must be the singular form 'lives'."
            },
            {
                question: "The source of all our problems ___ a lack of communication.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "hard",
                explanation: "The main subject is 'source' (singular), not 'problems'. The verb must agree with 'source', so 'is' is correct."
            },
            {
                question: "The discovery of new planets ___ astronomers.",
                options: ["excite", "excites", "are exciting", "have excited"],
                correct: 1,
                difficulty: "hard",
                explanation: "The true subject is 'discovery' (singular). The intervening phrase 'of new planets' does not affect the verb. Therefore, 'excites' is correct."
            }
          ]
        },
        {
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
          ],
          quiz: [
            {
              question: "The dog, as well as the cats, ___ hungry.",
              options: ["is", "are", "were", "be"],
              correct: 0,
              difficulty: "easy",
              explanation: "The phrase 'as well as the cats' is an additive phrase and should be ignored. The verb agrees with the main subject, 'The dog' (singular), so 'is' is correct."
            },
            {
                question: "The student, together with his parents, ___ waiting outside.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The verb agrees with the main subject, 'The student' (singular). The phrase 'together with his parents' is an interrupter."
            },
            {
                question: "My sister, unlike my brothers, ___ to read.",
                options: ["love", "loves", "are loving", "have loved"],
                correct: 1,
                difficulty: "easy",
                explanation: "The phrase 'unlike my brothers' is parenthetical. The verb 'loves' agrees with the singular subject 'My sister'."
            },
            {
              question: "The CEO, as well as his assistants, ___ attending the conference.",
              options: ["are", "is", "were", "be"],
              correct: 1,
              difficulty: "medium",
              explanation: "The phrase 'as well as his assistants' is an additive phrase and should be ignored. The verb agrees with the main subject, 'The CEO' (singular), so 'is' is correct."
            },
            {
                question: "The main course, in addition to the appetizers, ___ delicious.",
                options: ["was", "were", "is", "are"],
                correct: 0,
                difficulty: "medium",
                explanation: "The verb 'was' agrees with the primary subject 'The main course' (singular). The phrase 'in addition to the appetizers' is an interrupter."
            },
            {
                question: "The actor, accompanied by his agent, ___ arriving now.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The phrase 'accompanied by his agent' does not affect the verb. The verb 'is' agrees with the singular subject 'The actor'."
            },
            {
              question: "The Prime Minister, and not his cabinet members, ___ the final decision.",
              options: ["make", "makes", "are making", "have made"],
              correct: 1,
              difficulty: "hard",
              explanation: "The phrase 'and not his cabinet members' is parenthetical and should be ignored. The verb must agree with the true subject, 'The Prime Minister' (singular), making 'makes' correct."
            },
            {
                question: "The old manuscript, including all its footnotes and appendices, ___ a valuable historical document.",
                options: ["constitute", "constitutes", "are constituting", "have constituted"],
                correct: 1,
                difficulty: "hard",
                explanation: "The subject is 'The old manuscript' (singular). The long additive phrase starting with 'including' is an interrupter. The verb must be 'constitutes'."
            },
            {
                question: "My father, like many of his generation, ___ that hard work is the key to success.",
                options: ["believe", "believes", "are believing", "have believed"],
                correct: 1,
                difficulty: "hard",
                explanation: "The parenthetical phrase 'like many of his generation' does not affect the verb. The verb 'believes' agrees with the singular subject 'My father'."
            }
          ]
        },
        {
          id: 9,
          name: "Rule 9: Inverted Sentences (There/Here)",
          formula: "There/Here + Verb ... ➜ Verb agrees with Real Subject",
          explanation: "In sentences starting with there or here, these words are never the subject. Find the true subject that follows the verb.",
          examples: [
            {
                sentence: "There is a book on the table.",
                subject: "a book",
                verb: "is",
                reason: "In sentences starting with 'There', the verb 'is' agrees with the true subject 'a book' (singular), which follows it."
            },
            {
                sentence: "There was an earthquake.",
                subject: "an earthquake",
                verb: "was",
                reason: "The verb 'was' agrees with the singular subject 'an earthquake' that comes after it."
            },
            {
                sentence: "There are many problems.",
                subject: "many problems",
                verb: "are",
                reason: "The verb 'are' agrees with the plural subject 'many problems' that follows it."
            },
            {
                sentence: "There seem to be several reasons for the delay.",
                subject: "several reasons",
                verb: "seem",
                reason: "The verb 'seem' is plural because it agrees with the true subject, 'several reasons'."
            },
            {
                sentence: "There are several movies running.",
                subject: "several movies",
                verb: "are",
                reason: "The plural verb 'are' is used because the true subject, 'several movies', is plural."
            },
            {
                sentence: "Here are the papers you requested.",
                subject: "the papers",
                verb: "are",
                reason: "In sentences starting with 'Here', the verb 'are' agrees with the subject 'the papers' (plural), which follows it."
            }
          ],
          quiz: [
            {
              question: "There ___ three cookies left in the jar.",
              options: ["is", "are", "was", "be"],
              correct: 1,
              difficulty: "easy",
              explanation: "In sentences beginning with 'There', the verb agrees with the true subject that follows it. The subject is 'three cookies' (plural), so the plural verb 'are' is correct."
            },
            {
                question: "Here ___ your ticket.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The verb 'is' agrees with the true subject 'your ticket' (singular), which follows it."
            },
            {
                question: "There ___ a problem with the engine.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The singular verb 'is' is used because the true subject, 'a problem', is singular."
            },
            {
              question: "Here ___ the keys you were looking for.",
              options: ["is", "are", "was", "be"],
              correct: 1,
              difficulty: "medium",
              explanation: "In sentences beginning with 'Here', the verb agrees with the subject that follows it. The subject is 'the keys' (plural), so the plural verb 'are' is correct."
            },
            {
                question: "There ___ a few good reasons for his decision.",
                options: ["was", "were", "is", "be"],
                correct: 1,
                difficulty: "medium",
                explanation: "The verb 'were' agrees with the plural subject 'a few good reasons' that comes after it."
            },
            {
                question: "There ___ only one slice of pizza left.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The verb 'is' agrees with the singular subject 'one slice' that follows it."
            },
            {
              question: "There ___ to be a mistake in the calculations.",
              options: ["seem", "seems", "is seeming", "have seemed"],
              correct: 1,
              difficulty: "hard",
              explanation: "The verb must agree with the true subject that follows, which is 'a mistake' (singular). Therefore, the singular verb 'seems' is correct."
            },
            {
                question: "Across the street ___ a bakery and a bookstore.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "hard",
                explanation: "This is an inverted sentence. The true subject is 'a bakery and a bookstore' (plural), which requires the plural verb 'are'."
            },
            {
                question: "Here ___ the results from the latest study.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "hard",
                explanation: "The verb agrees with the subject that follows, which is 'the results' (plural). Therefore, 'are' is correct."
            }
          ]
        }
      ]
    },
    {
      title: "IV. Tricky Pronouns and Nouns",
      color: "bg-violet-100 border-violet-200",
      icon: "🎭",
      rules: [
        {
          id: 10,
          name: "Rule 10: Singular Indefinite Pronouns",
          formula: "Indefinite Pronoun (-one, -body, -thing) ➜ Singular Verb",
          explanation: "Indefinite pronouns are grammatically singular and always require singular verbs. This applies to pronouns ending in -one, -body, or -thing, as well as several others. The list includes: another, anybody, anyone, anything, each, either, everybody, everyone, everything, neither, nobody, no one, nothing, one, somebody, someone, and something.",
          examples: [
            {
                sentence: "Everyone has a book.",
                subject: "Everyone",
                verb: "has",
                reason: "The indefinite pronoun 'Everyone' is always singular and requires the singular verb 'has'."
            },
            {
                sentence: "Each of the students has a locker.",
                subject: "Each",
                verb: "has",
                reason: "'Each' is a singular indefinite pronoun, so it takes the singular verb 'has'."
            },
            {
                sentence: "Nobody knows the answer.",
                subject: "Nobody",
                verb: "knows",
                reason: "Pronouns ending in '-body', like 'Nobody', are singular and take a singular verb, 'knows'."
            },
            {
                sentence: "Somebody is at the door.",
                subject: "Somebody",
                verb: "is",
                reason: "'Somebody' is a singular indefinite pronoun, requiring the singular verb 'is'."
            },
            {
                sentence: "Everything comes back eventually.",
                subject: "Everything",
                verb: "comes",
                reason: "Pronouns ending in '-thing', like 'Everything', are singular and need a singular verb, 'comes'."
            },
            {
                sentence: "Either of the options is acceptable.",
                subject: "Either",
                verb: "is",
                reason: "'Either' as a pronoun is singular and takes the singular verb 'is'."
            },
            {
                sentence: "Anyone who tries deserves recognition.",
                subject: "Anyone",
                verb: "deserves",
                reason: "The indefinite pronoun 'Anyone' is singular, so the verb is 'deserves'."
            }
          ],
          quiz: [
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
          ]
        },
        {
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
          ],
          quiz: [
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
          ]
        },
        {
          id: 12,
          name: "Rule 12: Collective Nouns",
          formula: "Collective Noun (as unit) ➜ Singular Verb | (as individuals) ➜ Plural Verb",
          explanation: "When a collective noun acts together as a single unit, use singular verb. When members act separately, use plural verb.",
          examples: [
            {
                sentence: "The team is winning.",
                subject: "team",
                verb: "is",
                reason: "The collective noun 'team' is acting as a single unit, so it takes the singular verb 'is'."
            },
            {
                sentence: "The faculty are debating the new curriculum.",
                subject: "faculty",
                verb: "are",
                reason: "The members of the 'faculty' are acting as individuals in a debate, so the plural verb 'are' is used."
            },
            {
                sentence: "My family is settled in Australia.",
                subject: "family",
                verb: "is",
                reason: "'Family' is treated as a single, cohesive unit, requiring the singular verb 'is'."
            },
            {
                sentence: "The committee decides how to proceed.",
                subject: "committee",
                verb: "decides",
                reason: "The 'committee' is acting in unison as one body, so it takes the singular verb 'decides'."
            },
            {
                sentence: "The staff are in disagreement.",
                subject: "staff",
                verb: "are",
                reason: "Here, 'staff' refers to the individual members who are in disagreement, so the plural verb 'are' is used."
            },
            {
                sentence: "The jury were allowed to go home.",
                subject: "jury",
                verb: "were",
                reason: "The members of the 'jury' are acting as individuals (going to their separate homes), so the plural verb 'were' is correct."
            },
            {
                sentence: "The orchestra are tuning their instruments.",
                subject: "orchestra",
                verb: "are",
                reason: "The members of the 'orchestra' are tuning their individual instruments, indicating separate actions, so a plural verb 'are' is needed."
            }
          ],
          quiz: [
            {
              question: "The team ___ celebrating its victory.",
              options: ["is", "are", "was", "were"],
              correct: 0,
              difficulty: "easy",
              explanation: "The collective noun 'team' is acting as a single, unified group. Therefore, it takes the singular verb 'is'."
            },
            {
                question: "My family ___ on vacation.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The collective noun 'family' is acting as a single unit, so it requires the singular verb 'is'."
            },
            {
                question: "The audience ___ clapping enthusiastically.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "'Audience' is acting as a single, unified group, so the singular verb 'is' is correct."
            },
            {
              question: "The committee ___ on the new budget proposal tomorrow.",
              options: ["vote", "votes", "are voting", "have voted"],
              correct: 1,
              difficulty: "medium",
              explanation: "The collective noun 'committee' is acting as a single, unified group to cast one vote. When acting as a unit, it takes a singular verb, so 'votes' is correct."
            },
            {
                question: "The staff ___ taking their individual lunch breaks.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "medium",
                explanation: "The members of the 'staff' are acting as individuals (taking separate breaks), so the plural verb 'are' is used."
            },
            {
                question: "The group ___ to meet at the entrance.",
                options: ["agree", "agrees", "are agreeing", "have agreed"],
                correct: 1,
                difficulty: "medium",
                explanation: "The 'group' is acting as a single unit with a single agreement. Therefore, the singular verb 'agrees' is correct."
            },
            {
              question: "The jury ___ unable to agree on a verdict.",
              options: ["was", "were", "is", "be"],
              correct: 1,
              difficulty: "hard",
              explanation: "Here, the members of the 'jury' are acting as individuals who cannot agree. When the members act individually, the collective noun takes a plural verb, 'were'."
            },
            {
                question: "The faculty ___ their opinions on the new policy.",
                options: ["shares", "share", "is sharing", "has shared"],
                correct: 1,
                difficulty: "hard",
                explanation: "The context implies that individual members of the 'faculty' have different opinions to share. This focus on individual actions requires the plural verb 'share'."
            },
            {
                question: "The couple ___ about where to go for dinner.",
                options: ["argue", "argues", "is arguing", "has argued"],
                correct: 0,
                difficulty: "hard",
                explanation: "The word 'couple' implies two individuals. When they are arguing, they are acting as separate individuals, not a single unit. Therefore, the plural verb 'argue' is correct."
            }
          ]
        },
        {
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
          ],
          quiz: [
            {
              question: "Running ___ my favorite exercise.",
              options: ["is", "are", "was", "were"],
              correct: 0,
              difficulty: "easy",
              explanation: "The gerund 'Running' is a single activity acting as the subject, so it takes the singular verb 'is'."
            },
            {
                question: "To learn ___ the goal.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The infinitive 'To learn' acts as a singular noun subject, so it takes the singular verb 'is'."
            },
            {
                question: "Eating vegetables ___ good for your health.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The gerund phrase 'Eating vegetables' is a single activity and functions as a singular subject, requiring the verb 'is'."
            },
            {
              question: "Running and jumping ___ great forms of exercise.",
              options: ["is", "are", "was", "be"],
              correct: 1,
              difficulty: "medium",
              explanation: "Two distinct gerunds, 'Running' and 'jumping', are joined by 'and', forming a plural subject. Therefore, the plural verb 'are' is needed."
            },
            {
                question: "To listen and to understand ___ two different things.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "medium",
                explanation: "Two distinct infinitive phrases are joined by 'and', creating a plural subject that requires the plural verb 'are'."
            },
            {
                question: "Baking cakes ___ her passion.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The gerund phrase 'Baking cakes' functions as a single subject (the activity of baking), so it takes the singular verb 'is'."
            },
            {
              question: "Finding a parking spot during rush hour ___ a real challenge.",
              options: ["is", "are", "was", "were"],
              correct: 0,
              difficulty: "hard",
              explanation: "The entire gerund phrase 'Finding a parking spot during rush hour' acts as a single activity and is the subject. Therefore, it takes the singular verb 'is'."
            },
            {
                question: "To complain about the problem and to offer a solution ___ not the same thing.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "hard",
                explanation: "Two distinct activities, expressed as infinitive phrases and joined by 'and', form a plural subject. Thus, the plural verb 'are' is correct."
            },
            {
                question: "Developing new software and debugging old code ___ most of my time.",
                options: ["take up", "takes up", "is taking up", "has taken up"],
                correct: 0,
                difficulty: "hard",
                explanation: "The subject consists of two distinct gerund phrases joined by 'and', making it plural. Therefore, it requires the plural base verb 'take up'."
            }
          ]
        },
        {
          id: 14,
          name: "Rule 14: Measurements, Time, and Money as Units",
          formula: "Measurement/Time/Money (as one unit) ➜ Singular Verb",
          explanation: "When expressions of distance, money, time, or weight are considered as a total quantity or single conceptual unit, they require a singular verb.",
          examples: [
            {
                sentence: "Ten dollars is a high price to pay.",
                subject: "Ten dollars",
                verb: "is",
                reason: "The amount 'Ten dollars' is treated as a single sum of money, a singular unit, so it takes the singular verb 'is'."
            },
            {
                sentence: "Five years is the maximum sentence.",
                subject: "Five years",
                verb: "is",
                reason: "The period 'Five years' is considered a single duration, so it requires the singular verb 'is'."
            },
            {
                sentence: "Fifty pounds seems like a lot to carry.",
                subject: "Fifty pounds",
                verb: "seems",
                reason: "The weight 'Fifty pounds' is considered a single, collective amount, so it takes the singular verb 'seems'."
            },
            {
                sentence: "Ten minutes is enough time.",
                subject: "Ten minutes",
                verb: "is",
                reason: "'Ten minutes' is treated as a single block of time, making it a singular subject that takes the verb 'is'."
            },
            {
                sentence: "1267 kilometres is too long to travel.",
                subject: "1267 kilometres",
                verb: "is",
                reason: "The total distance '1267 kilometres' is a single measurement, requiring the singular verb 'is'."
            },
            {
                sentence: "Four quarts of oil was required.",
                subject: "Four quarts",
                verb: "was",
                reason: "The measurement 'Four quarts' is considered a single quantity, so the singular verb 'was' is used."
            }
          ],
          quiz: [
            {
              question: "Five miles ___ a long way to walk.",
              options: ["is", "are", "was", "were"],
              correct: 0,
              difficulty: "easy",
              explanation: "The distance 'Five miles' is treated as a single unit, so it requires the singular verb 'is'."
            },
            {
                question: "Two hours ___ a long time to wait.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The period 'Two hours' is considered a single block of time, so it takes the singular verb 'is'."
            },
            {
                question: "Twenty dollars ___ what I owe you.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The amount 'Twenty dollars' is treated as a single sum of money, requiring the singular verb 'is'."
            },
            {
              question: "Fifty dollars ___ too much for a t-shirt.",
              options: ["is", "are", "were", "be"],
              correct: 0,
              difficulty: "medium",
              explanation: "The amount 'Fifty dollars' is treated as a single sum of money, a singular unit. Therefore, it takes the singular verb 'is'."
            },
            {
                question: "Ten kilograms ___ the weight limit for this suitcase.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The measurement 'Ten kilograms' is considered a single, total amount, so it takes the singular verb 'is'."
            },
            {
                question: "Six weeks ___ not enough time to complete the project.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The time period 'Six weeks' is treated as a single duration, requiring the singular verb 'is'."
            },
            {
              question: "Two-thirds of the city ___ without power after the storm.",
              options: ["is", "are", "was", "were"],
              correct: 2,
              difficulty: "hard",
              explanation: "Fractions like 'two-thirds' follow the logic of quantifiers (Rule 11). The verb agrees with the noun that follows. Since 'city' is singular, the singular verb 'was' is correct."
            },
            {
                question: "Three-quarters of the students ___ passed the exam.",
                options: ["has", "have", "is", "are"],
                correct: 1,
                difficulty: "hard",
                explanation: "With fractions, the verb agrees with the noun that follows the preposition 'of'. Since 'students' is plural, the plural verb 'have' is required."
            },
            {
                question: "One hundred and fifty acres ___ a large area of land.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "hard",
                explanation: "The measurement 'One hundred and fifty acres' is considered a single unit of area, so it takes the singular verb 'is'."
            }
          ]
        },
        {
          id: 15,
          name: "Rule 15: Nouns Plural in Form but Singular in Meaning",
          formula: "Noun (news, physics, measles...) ➜ Singular Verb",
          explanation: "Names of academic subjects, diseases, the word news, and words like series and species end in -s but are grammatically singular.",
          examples: [
            {
                sentence: "The news is on at six.",
                subject: "news",
                verb: "is",
                reason: "The noun 'news' is always singular, even though it ends in '-s', so it takes the singular verb 'is'."
            },
            {
                sentence: "Mumps is a contagious disease.",
                subject: "Mumps",
                verb: "is",
                reason: "Names of diseases that end in '-s', like 'Mumps', are treated as singular."
            },
            {
                sentence: "Economics is her favorite subject.",
                subject: "Economics",
                verb: "is",
                reason: "Names of academic subjects like 'Economics' are singular and require a singular verb like 'is'."
            },
            {
                sentence: "Physics is a fascinating subject.",
                subject: "Physics",
                verb: "is",
                reason: "'Physics', a field of study, is a singular noun and takes the singular verb 'is'."
            },
            {
                sentence: "Mathematics is difficult.",
                subject: "Mathematics",
                verb: "is",
                reason: "Although it ends in '-s', 'Mathematics' is a single subject and requires the singular verb 'is'."
            },
            {
                sentence: "This series of events is important.",
                subject: "series",
                verb: "is",
                reason: "The word 'series' is singular in this context, referring to one sequence, so it takes the singular verb 'is'."
            },
            {
                sentence: "The new species was discovered recently.",
                subject: "species",
                verb: "was",
                reason: "'Species' can be singular or plural, but here it refers to one type, so the singular verb 'was' is correct."
            }
          ],
          quiz: [
            {
              question: "The news ___ on at 10 PM.",
              options: ["is", "are", "was", "were"],
              correct: 0,
              difficulty: "easy",
              explanation: "The noun 'news' is always treated as singular, so it requires the singular verb 'is'."
            },
            {
                question: "Measles ___ a common childhood disease.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "Names of diseases that end in '-s', like 'Measles', are treated as singular and take a singular verb."
            },
            {
                question: "Politics ___ a complicated topic.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "'Politics' is a field of study or activity that is treated as a singular noun."
            },
            {
              question: "Mathematics ___ a required subject.",
              options: ["is", "are", "was", "were"],
              correct: 0,
              difficulty: "medium",
              explanation: "Academic subjects that end in '-s', like 'Mathematics', are singular and take a singular verb like 'is'."
            },
            {
                question: "The series of books ___ very popular.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'series' (singular), not 'books'. Therefore, the singular verb 'is' is correct."
            },
            {
                question: "No news ___ good news.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "medium",
                explanation: "The noun 'news' is always singular, so it takes the singular verb 'is'."
            },
            {
              question: "The series of unfortunate events ___ just beginning.",
              options: ["was", "were", "is", "are"],
              correct: 0,
              difficulty: "hard",
              explanation: "The subject of the sentence is the singular noun 'series', not 'events'. Therefore, the singular verb 'was' is correct."
            },
            {
                question: "The species of butterfly ___ recently discovered.",
                options: ["was", "were", "is", "are"],
                correct: 0,
                difficulty: "hard",
                explanation: "The word 'species' can be singular or plural. Here, it refers to one specific type, making it singular. Thus, 'was' is correct."
            },
            {
                question: "Ethics ___ an important part of the curriculum.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "hard",
                explanation: "Like other academic subjects ending in '-s', 'Ethics' is treated as a singular noun and requires the singular verb 'is'."
            }
          ]
        },
        {
          id: 16,
          name: "Rule 16: Paired Items",
          formula: "Paired Noun (scissors, trousers) ➜ Plural Verb | 'A pair of' + Noun ➜ Singular Verb",
          explanation: "Nouns for things in two parts are inherently plural. EXCEPTION: When a pair of precedes these nouns, pair becomes the subject.",
          examples: [
            {
                sentence: "These scissors are dull.",
                subject: "scissors",
                verb: "are",
                reason: "Nouns for paired items like 'scissors' are treated as plural and take a plural verb like 'are'."
            },
            {
                sentence: "The pliers are in the toolbox.",
                subject: "pliers",
                verb: "are",
                reason: "'Pliers' is a plural noun because it consists of two parts, requiring the plural verb 'are'."
            },
            {
                sentence: "My trousers are too long.",
                subject: "trousers",
                verb: "are",
                reason: "'Trousers' is a plural noun representing a single item with two parts, so it requires the plural verb 'are'."
            },
            {
                sentence: "My glasses are on the table.",
                subject: "glasses",
                verb: "are",
                reason: "'Glasses' is an inherently plural noun and takes the plural verb 'are'."
            },
            {
                sentence: "A pair of scissors is missing.",
                subject: "pair",
                verb: "is",
                reason: "The phrase 'a pair of' makes the subject 'pair' singular, so it requires the singular verb 'is'."
            },
            {
                sentence: "This pair of pliers is brand new.",
                subject: "pair",
                verb: "is",
                reason: "The true subject is the singular noun 'pair', so it requires the singular verb 'is'."
            },
            {
                sentence: "A pair of jeans is nice.",
                subject: "pair",
                verb: "is",
                reason: "The true subject is the singular noun 'pair', which requires the singular verb 'is'."
            },
            {
                sentence: "A pair of gloves was found.",
                subject: "pair",
                verb: "was",
                reason: "When 'a pair of' is used, the subject becomes 'pair' (singular), so the verb must be 'was'."
            }
          ],
          quiz: [
            {
              question: "My glasses ___ on the desk.",
              options: ["is", "are", "was", "be"],
              correct: 1,
              difficulty: "easy",
              explanation: "'Glasses' is an inherently plural noun because it consists of two parts. It requires the plural verb 'are'."
            },
            {
                question: "These shorts ___ too small for me.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Shorts' is a plural noun for a paired item and requires the plural verb 'are'."
            },
            {
                question: "The scissors ___ in the drawer.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "easy",
                explanation: "'Scissors' is always treated as a plural noun, so it takes the plural verb 'are'."
            },
            {
              question: "A pair of scissors ___ on the table.",
              options: ["was", "were", "are", "be"],
              correct: 0,
              difficulty: "medium",
              explanation: "The true subject of the sentence is the singular noun 'pair', not 'scissors'. Therefore, the singular verb 'was' is correct."
            },
            {
                question: "That pair of trousers ___ a hole in it.",
                options: ["has", "have", "is", "are"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is the singular noun 'pair', so it requires the singular verb 'has'."
            },
            {
                question: "Two pairs of shoes ___ by the door.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "medium",
                explanation: "The subject is 'Two pairs', which is plural. Therefore, it takes the plural verb 'are'."
            },
            {
              question: "This new pair of jeans ___ perfectly.",
              options: ["fit", "fits", "are fitting", "have fit"],
              correct: 1,
              difficulty: "hard",
              explanation: "The subject of the verb is the singular noun 'pair'. Therefore, it requires the singular verb form 'fits'."
            },
            {
                question: "Where ___ the pliers I bought yesterday?",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "hard",
                explanation: "'Pliers' is an inherently plural noun, even when referring to a single tool. It requires the plural verb 'are'."
            },
            {
                question: "The tongs ___ too hot to touch.",
                options: ["was", "were", "is", "be"],
                correct: 1,
                difficulty: "hard",
                explanation: "'Tongs' is a noun for a paired item and is always plural. Therefore, the plural verb 'were' is correct."
            }
          ]
        }
      ]
    },
    {
      title: "V. Advanced and Special Cases",
      color: "bg-rose-100 border-rose-200",
      icon: "🎓",
      rules: [
        {
          id: 17,
          name: "Rule 17: Relative Pronouns and Antecedents",
          formula: "...Antecedent + who/that... ➜ Verb agrees with Antecedent",
          explanation: "When a relative pronoun is the subject of its clause, the verb must agree with the noun/pronoun it refers to (the antecedent).",
          examples: [
            {
                sentence: "The cat that jumps on furniture is playful.",
                subject: "that",
                verb: "jumps",
                reason: "The relative pronoun 'that' refers to its antecedent 'cat' (singular), so the verb in the clause is 'jumps'."
            },
            {
                sentence: "Salma is the scientist who writes the reports.",
                subject: "who",
                verb: "writes",
                reason: "The verb 'writes' agrees with the antecedent 'scientist' (singular), which the relative pronoun 'who' refers to."
            },
            {
                sentence: "It is I who am responsible.",
                subject: "who",
                verb: "am",
                reason: "The relative pronoun 'who' refers to 'I', so the verb must be 'am' to agree with the first-person singular antecedent."
            },
            {
                sentence: "The students who study hard succeed.",
                subject: "who",
                verb: "study",
                reason: "The verb 'study' agrees with the plural antecedent 'students', which 'who' refers to."
            },
             {
                sentence: "The employees who were promoted are very dedicated.",
                subject: "who",
                verb: "were promoted",
                reason: "The relative pronoun 'who' refers to the plural antecedent 'employees', so the plural verb 'were promoted' is used."
            },
            {
                sentence: "These are the workers who do the job well.",
                subject: "who",
                verb: "do",
                reason: "The relative pronoun 'who' refers to the plural noun 'workers', so the plural verb 'do' is used."
            },
            {
                sentence: "He is one of the men who do the work.",
                subject: "who",
                verb: "do",
                reason: "The pronoun 'who' refers to 'men' (plural), not 'one'. Therefore, the plural verb 'do' is correct."
            }
          ],
          quiz: [
            {
              question: "The man who ___ next door is a doctor.",
              options: ["live", "lives", "is living", "have lived"],
              correct: 1,
              difficulty: "easy",
              explanation: "The relative pronoun 'who' refers to its antecedent, 'The man' (singular). Therefore, the verb must be 'lives'."
            },
            {
                question: "I like the book that ___ on the table.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "The pronoun 'that' refers to the singular antecedent 'book', so the singular verb 'is' is correct."
            },
            {
                question: "The dogs that ___ barking belong to my neighbor.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "easy",
                explanation: "The pronoun 'that' refers to the plural antecedent 'dogs', so the plural verb 'are' is correct."
            },
            {
              question: "She is one of the students who always ___ their homework.",
              options: ["do", "does", "is doing", "has done"],
              correct: 0,
              difficulty: "medium",
              explanation: "The relative pronoun 'who' refers to its antecedent 'students' (plural), not 'one'. Therefore, the verb must be the plural form 'do'."
            },
            {
                question: "This is the car which ___ the best gas mileage.",
                options: ["has", "have", "is", "are"],
                correct: 0,
                difficulty: "medium",
                explanation: "The pronoun 'which' refers to the singular antecedent 'car', requiring the singular verb 'has'."
            },
            {
                question: "The employees who ___ for the promotion are nervous.",
                options: ["is waiting", "are waiting", "waits", "wait"],
                correct: 1,
                difficulty: "medium",
                explanation: "The pronoun 'who' refers to the plural antecedent 'employees'. Therefore, the plural verb phrase 'are waiting' is correct."
            },
            {
              question: "He is one of those people who ___ always on time.",
              options: ["is", "are", "be", "was"],
              correct: 1,
              difficulty: "hard",
              explanation: "The relative pronoun 'who' refers to its antecedent, 'people' (plural), not 'one'. Therefore, the verb must be plural, making 'are' the correct choice."
            },
            {
                question: "The only one of the students who ___ the answer is Sarah.",
                options: ["know", "knows", "is knowing", "have known"],
                correct: 1,
                difficulty: "hard",
                explanation: "In the phrase 'the only one of...', the antecedent of 'who' is the singular 'one', not the plural 'students'. Therefore, the singular verb 'knows' is correct."
            },
            {
                question: "The company that ___ its employees well is successful.",
                options: ["treat", "treats", "are treating", "have treated"],
                correct: 1,
                difficulty: "hard",
                explanation: "The relative pronoun 'that' refers to the singular antecedent 'company'. Thus, the verb must be the singular form 'treats'."
            }
          ]
        },
        {
          id: 18,
          name: "Rule 18: The Subjunctive Mood",
          formula: "If / I wish + Subject ➜ were (hypothetical)",
          explanation: "When expressing a wish or contrary-to-fact condition, use were regardless of subject number.",
          examples: [
            {
                sentence: "I wish my sister were here.",
                subject: "my sister",
                verb: "were",
                reason: "The subjunctive mood is used for wishes or hypothetical situations. 'Were' is used instead of 'was' for the singular subject 'my sister'."
            },
            {
                sentence: "If the story were true, what would it matter?",
                subject: "the story",
                verb: "were",
                reason: "In this contrary-to-fact condition ('If...'), the subjunctive 'were' is used with the singular subject 'the story'."
            },
            {
                sentence: "The doctor insists that she rest for a week.",
                subject: "she",
                verb: "rest",
                reason: "In a clause expressing a demand or recommendation (after 'insists that'), the subjunctive base verb 'rest' is used, not 'rests'."
            },
            {
                sentence: "If I were a bird, I would fly.",
                subject: "I",
                verb: "were",
                reason: "For hypothetical 'If' clauses, the subjunctive 'were' is used for all subjects, including 'I'."
            },
            {
                sentence: "I wish my father were here.",
                subject: "my father",
                verb: "were",
                reason: "To express a wish, the subjunctive verb 'were' is used, even with a singular subject like 'my father'."
            },
            {
                sentence: "I wish I were taller.",
                subject: "I",
                verb: "were",
                reason: "The subjunctive 'were' is used after 'I wish' to express a condition that is not real."
            }
          ],
          quiz: [
            {
              question: "I wish I ___ a millionaire.",
              options: ["was", "were", "am", "be"],
              correct: 1,
              difficulty: "easy",
              explanation: "For wishes and hypothetical situations, the subjunctive mood is used. 'Were' is the correct form for all subjects in this case."
            },
            {
                question: "If I ___ you, I would apologize.",
                options: ["was", "were", "am", "be"],
                correct: 1,
                difficulty: "easy",
                explanation: "In contrary-to-fact 'if' clauses, the subjunctive 'were' is used for all subjects, including 'I'."
            },
            {
                question: "He acts as if he ___ the boss.",
                options: ["was", "were", "is", "be"],
                correct: 1,
                difficulty: "easy",
                explanation: "The phrase 'as if' introduces a hypothetical situation, requiring the subjunctive verb 'were'."
            },
            {
              question: "I wish my boss ___ more understanding.",
              options: ["was", "is", "were", "be"],
              correct: 2,
              difficulty: "medium",
              explanation: "This sentence expresses a wish, which is a contrary-to-fact condition. In the subjunctive mood, 'were' is used for all subjects, including singular ones like 'my boss'."
            },
            {
                question: "It is essential that she ___ the meeting.",
                options: ["attend", "attends", "is attending", "has attended"],
                correct: 0,
                difficulty: "medium",
                explanation: "After phrases expressing importance or necessity ('it is essential that...'), the subjunctive is used. This requires the base form of the verb ('attend')."
            },
            {
                question: "He demanded that the problem ___ solved immediately.",
                options: ["is", "was", "be", "were"],
                correct: 2,
                difficulty: "medium",
                explanation: "After verbs of demand ('demanded that...'), the subjunctive uses the base form of the verb. The base form of 'to be' is 'be'."
            },
            {
              question: "The board requires that every member ___ present at the meeting.",
              options: ["is", "be", "are", "was"],
              correct: 1,
              difficulty: "hard",
              explanation: "In clauses that follow verbs of command or requirement (like 'requires that'), the subjunctive mood uses the base form of the verb. The base form of 'to be' is 'be'."
            },
            {
                question: "I recommend that he ___ a break.",
                options: ["take", "takes", "is taking", "has taken"],
                correct: 0,
                difficulty: "hard",
                explanation: "After verbs of recommendation ('recommend that...'), the subjunctive is used, which calls for the base form of the verb ('take') regardless of the subject."
            },
            {
                question: "If the committee ___ to approve the budget, the project would proceed.",
                options: ["was", "were", "is", "are"],
                correct: 1,
                difficulty: "hard",
                explanation: "This is a hypothetical 'if' clause about the committee's decision. Even though 'committee' is singular, the subjunctive mood requires 'were'."
            }
          ]
        },
        {
          id: 19,
          name: "Rule 19: Formal Inversion with Negative Adverbs",
          formula: "Negative Adverb ➜ Auxiliary + Subject + Verb",
          explanation: "In formal statements beginning with negative or restrictive adverbs, the auxiliary verb precedes the subject. The auxiliary must still agree with the main subject.",
          examples: [
            {
                sentence: "Rarely does he arrive late.",
                subject: "he",
                verb: "does",
                reason: "After the negative adverb 'Rarely', the sentence is inverted. The auxiliary verb 'does' agrees with the singular subject 'he'."
            },
            {
                sentence: "Never have I seen such a beautiful sunset.",
                subject: "I",
                verb: "have",
                reason: "When a sentence starts with 'Never', the auxiliary 'have' comes before the subject 'I', with which it agrees."
            },
            {
                sentence: "Under no circumstances are you to leave this room.",
                subject: "you",
                verb: "are",
                reason: "The phrase 'Under no circumstances' forces an inversion. The verb 'are' comes before and agrees with the subject 'you'."
            },
            {
                sentence: "Not only does she sing but she also dances.",
                subject: "she",
                verb: "does",
                reason: "Following 'Not only', the auxiliary verb 'does' is placed before the subject 'she' and agrees with it."
            },
            {
                sentence: "Only after the meeting did they make a decision.",
                subject: "they",
                verb: "did",
                reason: "After the restrictive phrase 'Only after...', the auxiliary 'did' precedes the subject 'they'."
            },
            {
                sentence: "Seldom do they travel abroad.",
                subject: "they",
                verb: "do",
                reason: "The negative adverb 'Seldom' causes inversion. The auxiliary verb 'do' agrees with the plural subject 'they'."
            }
          ],
          quiz: [
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
          ]
        },
        {
          id: 20,
          name: "Rule 20: A Number vs The Number",
          formula: "'A number of' ➜ Plural Verb | 'The number of' ➜ Singular Verb",
          explanation: "A number of means many and takes a plural verb. The number of refers to a single count and takes a singular verb.",
          examples: [
            {
                sentence: "A number of people have written in.",
                subject: "A number",
                verb: "have",
                reason: "The phrase 'A number of' is plural and means 'many', so it takes the plural verb 'have'."
            },
            {
                sentence: "The number of applicants is strictly limited.",
                subject: "The number",
                verb: "is",
                reason: "The phrase 'The number of' refers to a single figure and is always singular, requiring the verb 'is'."
            },
            {
                sentence: "A number of cars were parked outside.",
                subject: "A number",
                verb: "were",
                reason: "'A number of' functions as a plural subject, requiring the plural verb 'were'."
            },
            {
                sentence: "The number of cars parked outside was surprising.",
                subject: "The number",
                verb: "was",
                reason: "The subject is the singular phrase 'The number', so it requires the singular verb 'was'."
            },
            {
                sentence: "A number of tickets were sold yesterday.",
                subject: "A number",
                verb: "were",
                reason: "'A number of' acts as a plural quantifier, requiring the plural verb 'were'."
            },
            {
                sentence: "The number of problems was daunting.",
                subject: "The number",
                verb: "was",
                reason: "'The number of' is a singular subject, so it takes the singular verb 'was'."
            },
            {
                sentence: "A number of students have arrived late.",
                subject: "A number",
                verb: "have",
                reason: "The expression 'A number of' is always plural, so the verb is 'have'."
            },
            {
                sentence: "The number of attendees has reached one hundred.",
                subject: "The number",
                verb: "has",
                reason: "The subject is the singular phrase 'The number', which takes the singular verb 'has'."
            }
          ],
          quiz: [
            {
              question: "A number of students ___ late.",
              options: ["was", "were", "is", "be"],
              correct: 1,
              difficulty: "easy",
              explanation: "The phrase 'A number of' means 'many' and is treated as a plural subject, requiring the plural verb 'were'."
            },
            {
                question: "The number of days in February ___ 28 or 29.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                difficulty: "easy",
                explanation: "'The number of' refers to a single quantity and is always singular, requiring the verb 'is'."
            },
            {
                question: "A number of questions ___ asked.",
                options: ["was", "were", "is", "be"],
                correct: 1,
                difficulty: "easy",
                explanation: "'A number of' is a plural expression, so it takes the plural verb 'were'."
            },
            {
              question: "The number of mistakes ___ surprisingly low.",
              options: ["was", "were", "are", "be"],
              correct: 0,
              difficulty: "medium",
              explanation: "The phrase 'The number of' refers to a single figure and is always treated as a singular subject. It requires the singular verb 'was'."
            },
            {
                question: "A number of new employees ___ been hired.",
                options: ["has", "have", "is", "are"],
                correct: 1,
                difficulty: "medium",
                explanation: "'A number of' is treated as plural, so it requires the plural auxiliary verb 'have'."
            },
            {
                question: "The number of guests at the party ___ over one hundred.",
                options: ["was", "were", "is", "are"],
                correct: 0,
                difficulty: "medium",
                explanation: "The subject is 'The number' (singular), so the singular verb 'was' is correct."
            },
            {
              question: "The number of issues that ___ to be addressed is overwhelming.",
              options: ["need", "needs", "is needing", "has needed"],
              correct: 0,
              difficulty: "hard",
              explanation: "This sentence has two subject-verb pairs. 'The number ... is overwhelming' is the main one. The relative clause is 'that need to be addressed', where 'that' refers to the plural 'issues'. Therefore, 'need' is the correct verb for the clause."
            },
            {
                question: "A growing number of people ___ choosing to work from home.",
                options: ["is", "are", "was", "were"],
                correct: 1,
                difficulty: "hard",
                explanation: "Even with 'growing', the phrase 'A number of' still functions as a plural subject, requiring the plural verb 'are'."
            },
            {
                question: "While a number of solutions ___ proposed, the number of viable options ___ limited.",
                options: ["was, were", "were, was", "are, is", "is, are"],
                correct: 1,
                difficulty: "hard",
                explanation: "'A number of solutions' is plural, so it needs 'were'. 'The number of viable options' is singular, so it needs 'was'."
            }
          ]
        },
        {
          id: 21,
          name: "Rule 21: Nominal Relative Clauses",
          formula: "Noun Clause (what, how, etc.) as Subject ➜ Singular Verb",
          explanation: "A nominal relative clause or noun clause that functions as the subject is treated as one abstract, singular unit.",
          examples: [
            {
                sentence: "How you got there doesn't concern me.",
                subject: "How you got there",
                verb: "doesn't",
                reason: "The entire noun clause 'How you got there' acts as a single, abstract subject, requiring the singular verb 'doesn't'."
            },
            {
                sentence: "Whatever is best for the team is what we will do.",
                subject: "Whatever is best for the team",
                verb: "is",
                reason: "The noun clause acts as a singular subject, referring to one abstract idea, so it takes the singular verb 'is'."
            },
            {
                sentence: "Whatever book a Times reviewer praises sells well.",
                subject: "Whatever book a Times reviewer praises",
                verb: "sells",
                reason: "The noun clause is the subject of the sentence and is treated as singular, taking the verb 'sells'."
            },
            {
                sentence: "What I say or what I think is no business of yours.",
                subject: "What I say or what I think",
                verb: "is",
                reason: "The entire clause functions as a single idea and is therefore a singular subject, requiring the verb 'is'."
            },
            {
                sentence: "What was once a palace is now a pile of rubble.",
                subject: "What was once a palace",
                verb: "is",
                reason: "The clause 'What was once a palace' acts as a singular subject, so it takes the singular verb 'is'."
            },
            {
                sentence: "What ideas he has are his wife's.",
                subject: "What ideas he has",
                verb: "are",
                reason: "In this exception, the subject of the clause ('ideas') is clearly plural, so the verb 'are' is plural to match."
            }
          ],
          quiz: [
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
          ]
        },
        {
          id: 22,
          name: "Rule 22: Agreement of Person",
          formula: "It is I who... ➜ am | It is You who... ➜ are | It is He who... ➜ is",
          explanation: "The verb must agree in person with its antecedent. When the antecedent is I, use am. When it's you, use are. When it's he/she, use is.",
          examples: [
            {
                sentence: "It is I who am responsible.",
                subject: "who",
                verb: "am",
                reason: "The verb 'am' agrees in person with its antecedent, 'I' (first-person singular)."
            },
            {
                sentence: "I who am your friend should stand by you.",
                subject: "who",
                verb: "am",
                reason: "The verb in the relative clause, 'am', agrees with the antecedent 'I'."
            },
            {
                sentence: "It is you who are making the difference.",
                subject: "who",
                verb: "are",
                reason: "The verb 'are' agrees with the second-person antecedent 'you'."
            },
            {
                sentence: "It is they who are to blame.",
                subject: "who",
                verb: "are",
                reason: "The verb 'are' agrees with the plural antecedent 'they'."
            },
            {
                sentence: "It is you who need to finish the work.",
                subject: "who",
                verb: "need",
                reason: "The verb 'need' agrees with the antecedent 'you', which takes the base form of the verb."
            },
            {
                sentence: "It is he who is responsible.",
                subject: "who",
                verb: "is",
                reason: "The verb 'is' agrees with the third-person singular antecedent 'he'."
            }
          ],
          quiz: [
            {
              question: "It is you who ___ mistaken.",
              options: ["is", "are", "am", "be"],
              correct: 1,
              difficulty: "easy",
              explanation: "The verb in the relative clause must agree with the antecedent of 'who', which is 'you'. Therefore, 'are' is the correct verb."
            },
            {
                question: "It is he who ___ at the door.",
                options: ["is", "are", "am", "be"],
                correct: 0,
                difficulty: "easy",
                explanation: "The verb must agree with the antecedent of 'who', which is 'he' (third-person singular). So, 'is' is correct."
            },
            {
                question: "It is they who ___ making all the noise.",
                options: ["is", "are", "am", "be"],
                correct: 1,
                difficulty: "easy",
                explanation: "The antecedent of 'who' is the plural pronoun 'they', so the verb must be the plural form 'are'."
            },
            {
              question: "It is I who ___ responsible for this project.",
              options: ["is", "are", "am", "be"],
              correct: 2,
              difficulty: "medium",
              explanation: "The verb must agree in person with its antecedent. The relative pronoun 'who' refers to 'I' (first-person singular), so the correct verb is 'am'."
            },
            {
                question: "You are the person who ___ me yesterday.",
                options: ["call", "calls", "called", "calling"],
                correct: 2,
                difficulty: "medium",
                explanation: "The antecedent of 'who' is 'person' (third-person singular). The context 'yesterday' indicates past tense, so 'called' is correct. The verb tense is independent of the agreement rule here, but it's a common trick."
            },
            {
                question: "He is the one who ___ all the answers.",
                options: ["know", "knows", "is knowing", "have known"],
                correct: 1,
                difficulty: "medium",
                explanation: "The verb in the relative clause agrees with the antecedent of 'who', which is 'one' (singular). Therefore, the verb is 'knows'."
            },
            {
              question: "She is the one person among the candidates who truly ___ the community.",
              options: ["understand", "understands", "are understanding", "have understood"],
              correct: 1,
              difficulty: "hard",
              explanation: "The antecedent of the relative pronoun 'who' is 'one person' (singular), not 'candidates'. Therefore, the verb must be the singular form 'understands'."
            },
            {
                question: "It is we who ___ to make the first move.",
                options: ["has", "have", "is", "are"],
                correct: 1,
                difficulty: "hard",
                explanation: "The verb in the relative clause must agree with the antecedent of 'who', which is the plural pronoun 'we'. Therefore, 'have' is correct."
            },
            {
                question: "They are the artists who ___ these masterpieces.",
                options: ["paint", "paints", "is painting", "has painted"],
                correct: 0,
                difficulty: "hard",
                explanation: "The antecedent of 'who' is 'artists' (plural). Therefore, the verb must be the plural base form 'paint'."
            }
          ]
        }
      ]
    }
  ];