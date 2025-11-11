import React, { useState } from 'react';
import type { Rule, QuizQuestion, Difficulty } from '../types';
import { ruleCategories, initialQuizQuestions } from '../data/rules';
import { StarIcon, CheckCircleIcon, XCircleIcon, AwardIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';
import Mascot from './Mascot';
import * as Infographics from './RuleInfographics';

const InfoMap: Record<number, React.FC> = {
    1: Infographics.Rule1Infographic,
    2: Infographics.Rule2Infographic,
    3: Infographics.Rule3Infographic,
    4: Infographics.Rule4Infographic,
    5: Infographics.Rule5Infographic,
    6: Infographics.Rule6Infographic,
    7: Infographics.Rule7Infographic,
    8: Infographics.Rule8Infographic,
    9: Infographics.Rule9Infographic,
    10: Infographics.Rule10Infographic,
    11: Infographics.Rule11Infographic,
    12: Infographics.Rule12Infographic,
    13: Infographics.Rule13Infographic,
    14: Infographics.Rule14Infographic,
    15: Infographics.Rule15Infographic,
    16: Infographics.Rule16Infographic,
    17: Infographics.Rule17Infographic,
    18: Infographics.Rule18Infographic,
    19: Infographics.Rule19Infographic,
    20: Infographics.Rule20Infographic,
    21: Infographics.Rule21Infographic,
    22: Infographics.Rule22Infographic,
};


const FormulaDisplay: React.FC<{ formula: string; baseTextSize?: string }> = ({
  formula,
  baseTextSize = 'text-xs',
}) => {
  const formulaParts = formula.split(' | ');

  const renderPart = (part: string) => {
    const segments = part.split('➜');
    if (segments.length === 2) {
      return (
        <>
          <span className="text-slate-700">{segments[0].trim()}</span>
          <span className="font-bold text-violet-600 mx-2">➜</span>
          <span className="text-slate-900 font-bold">{segments[1].trim()}</span>
        </>
      );
    }
    return <span className="text-slate-800 font-semibold">{part}</span>;
  };

  return (
    <div className={`font-mono ${baseTextSize} leading-relaxed`}>
      {formulaParts.map((part, index) => (
        <div key={index}>
          {renderPart(part)}
        </div>
      ))}
    </div>
  );
};

const SVAInfographic: React.FC = () => {
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);
  const [activeExample, setActiveExample] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleRuleSelect = (rule: Rule | null) => {
    setSelectedRule(rule);
    setActiveExample(null);
  };

  const handleQuizStart = (questions: QuizQuestion[]) => {
    if (!questions || questions.length === 0) return;
    setActiveQuizQuestions(questions);
    setQuizMode(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    const currentQ = activeQuizQuestions[currentQuestion];
    
    if (index === currentQ.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const totalQuestions = activeQuizQuestions.length;
    
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setQuizMode(false);
    }
  };

  if (quizMode) {
    const questions = activeQuizQuestions;
    const question = questions[currentQuestion];
    
    if (!question) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="mb-4">No questions available for this quiz.</p>
                <button 
                  onClick={() => setQuizMode(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Go Back
                </button>
            </div>
        )
    }
    const isCorrect = selectedAnswer === question.correct;
    const mascotExpression = !answered ? 'thinking' : isCorrect ? 'happy' : 'excited';

    return (
      <div className="min-h-screen p-4 md:p-8 bg-slate-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setQuizMode(false)}
              className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition"
            >
              <ChevronLeftIcon />
            </button>
            <Mascot expression={mascotExpression} />
            <div className="text-right">
              <div className="text-sm text-gray-600">Question {currentQuestion + 1}/{questions.length}</div>
              <div className="text-lg font-bold text-violet-600 font-poppins">Score: {score}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm mb-4 font-semibold">
                {question.difficulty.toUpperCase()}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-poppins">{question.question}</h2>
            </div>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`w-full p-4 text-left rounded-xl shadow-sm transition-all duration-200 ${
                    answered
                      ? index === question.correct
                        ? 'bg-green-100 border-2 border-green-500 text-green-900 font-bold'
                        : index === selectedAnswer
                        ? 'bg-red-100 border-2 border-red-500 text-red-900'
                        : 'bg-gray-100 border border-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-white border border-gray-200 hover:border-violet-400 hover:bg-violet-50 hover:shadow-md text-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {answered && index === question.correct && (
                      <CheckCircleIcon className="text-green-600" size={24} />
                    )}
                    {answered && index === selectedAnswer && index !== question.correct && (
                      <XCircleIcon className="text-red-600" size={24} />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {answered && (
              <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="font-bold mb-2 font-poppins">
                  {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                </div>
                <p className="text-sm text-gray-700 mb-2">{question.explanation}</p>
                {question.rule && (
                  <div className="text-sm text-gray-700">
                    <strong>Rule Applied:</strong> {question.rule}
                  </div>
                )}
              </div>
            )}

            {answered && (
              <button
                onClick={handleNext}
                className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:shadow-lg font-bold transition-shadow duration-300"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (selectedRule === null) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Mascot expression="excited" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 font-poppins">
              Subject-Verb Agreement Master Guide
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              Your Complete Reference for Perfect Grammar
            </p>
            <p className="text-sm text-gray-500 italic">
              Created by Ms. Shalaka Kashikar
            </p>
          </div>

          {ruleCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-8">
              <div className={`${category.color} border-2 rounded-2xl p-6 shadow-lg`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.rules.map((rule) => (
                    <button
                      key={rule.id}
                      onClick={() => handleRuleSelect(rule)}
                      className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left border-2 border-transparent hover:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {rule.id}
                          </div>
                          <h3 className="font-bold text-base text-gray-800 font-poppins">{rule.name}</h3>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-slate-200">
                        <FormulaDisplay formula={rule.formula} />
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{rule.explanation}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12 bg-white rounded-2xl p-6 shadow-xl border-2 border-violet-200">
            <div className="flex items-center gap-3 mb-4">
              <AwardIcon className="text-amber-500" size={32} />
              <h3 className="text-2xl font-bold text-gray-800 font-poppins">Final Mixed Quiz!</h3>
            </div>
            <p className="text-gray-600 mb-4">Ready to test your overall knowledge? Choose a difficulty level to start a quiz with questions from all rules.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleQuizStart(initialQuizQuestions.easy)}
                className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transform transition font-bold shadow-md"
              >
                Easy 😊
              </button>
              <button
                onClick={() => handleQuizStart(initialQuizQuestions.medium)}
                className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transform transition font-bold shadow-md"
              >
                Medium 🤔
              </button>
              <button
                onClick={() => handleQuizStart(initialQuizQuestions.hard)}
                className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transform transition font-bold shadow-md"
              >
                Hard 🔥
              </button>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex justify-center mb-4">
              <Mascot expression="happy" />
            </div>
            <p className="text-gray-600 text-lg">
              Master these 22 comprehensive rules and ace your grammar! 🎯
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Crafted with ❤️ by Ms. Shalaka Kashikar
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  const RuleInfographicComponent = InfoMap[selectedRule.id];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => handleRuleSelect(null)}
          className="mb-6 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all font-bold text-violet-600 flex items-center gap-2 group"
        >
          <ChevronLeftIcon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to All Rules</span>
        </button>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg flex-shrink-0">
                {selectedRule.id}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">{selectedRule.name}</h2>
              </div>
            </div>
            <Mascot expression="happy" />
          </div>

          <div className="bg-gradient-to-r from-violet-50 to-rose-50 rounded-xl p-6 mb-6 shadow-inner border border-violet-100">
            <h3 className="text-sm font-bold text-violet-800 mb-3 tracking-wider font-poppins">FORMULA</h3>
            <FormulaDisplay formula={selectedRule.formula} baseTextSize="text-lg md:text-xl" />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Explanation</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{selectedRule.explanation}</p>
          </div>

          {RuleInfographicComponent && <RuleInfographicComponent />}

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Examples</h3>
            <div className="space-y-3">
              {selectedRule.examples.map((example, index) => {
                  const isInteractive = typeof example === 'object' && 'sentence' in example;
                  
                  if (isInteractive) {
                      const { sentence, subject, verb, reason } = example;
                      const parts = sentence.split(new RegExp(`(${subject}|${verb})`, 'g')).filter(Boolean);
                      const isActive = activeExample === index;

                      return (
                          <div key={index}>
                              <button
                                  onClick={() => setActiveExample(isActive ? null : index)}
                                  className="w-full text-left flex items-start justify-between gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500 hover:bg-emerald-100 transition-colors cursor-pointer"
                                  aria-expanded={isActive}
                                  aria-controls={`explanation-${index}`}
                              >
                                  <div className="flex items-start gap-3">
                                      <StarIcon className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                                      <p className="text-gray-800 font-medium">
                                          {parts.map((part, i) => {
                                              if (part === subject) {
                                                  return <span key={i} className="font-bold text-blue-600 bg-blue-100 px-1 rounded">{part}</span>;
                                              }
                                              if (part === verb) {
                                                  return <span key={i} className="font-bold text-violet-600 bg-violet-100 px-1 rounded">{part}</span>;
                                              }
                                              return <span key={i}>{part}</span>;
                                          })}
                                      </p>
                                  </div>
                                  <ChevronRightIcon className={`w-5 h-5 text-emerald-600 flex-shrink-0 mt-1 transform transition-transform duration-200 ${isActive ? 'rotate-90' : ''}`} />
                              </button>
                              {isActive && (
                                  <div id={`explanation-${index}`} className="mt-2 p-4 bg-slate-100 rounded-b-lg border-x-2 border-b-2 border-slate-200">
                                      <p className="text-gray-700">{reason}</p>
                                  </div>
                              )}
                          </div>
                      );
                  }
                  
                  return (
                      <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                          <StarIcon className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                          <p className="text-gray-800 font-medium">{example as string}</p>
                      </div>
                  );
              })}
            </div>
          </div>
          
          {selectedRule.quiz && selectedRule.quiz.length > 0 && (
            <div className="mt-8 bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <AwardIcon className="text-amber-600" size={24} />
                <h3 className="text-xl font-bold text-amber-800 font-poppins">Test Your Knowledge!</h3>
              </div>
              <p className="text-amber-700 mb-4">Check your understanding of <span className="font-bold">{selectedRule.name}</span> by choosing a difficulty level.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleQuizStart(selectedRule.quiz?.filter(q => q.difficulty === 'easy') || [])}
                  className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transform transition font-bold shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  disabled={!selectedRule.quiz?.some(q => q.difficulty === 'easy')}
                >
                  Easy 😊
                </button>
                <button
                  onClick={() => handleQuizStart(selectedRule.quiz?.filter(q => q.difficulty === 'medium') || [])}
                  className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transform transition font-bold shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  disabled={!selectedRule.quiz?.some(q => q.difficulty === 'medium')}
                >
                  Medium 🤔
                </button>
                <button
                  onClick={() => handleQuizStart(selectedRule.quiz?.filter(q => q.difficulty === 'hard') || [])}
                  className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transform transition font-bold shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  disabled={!selectedRule.quiz?.some(q => q.difficulty === 'hard')}
                >
                  Hard 🔥
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">Created by Ms. Shalaka Kashikar</p>
        </div>
      </div>
    </div>
  );
};

export default SVAInfographic;
