export interface Answer {
  id: number
  text: string
  score: number
}

export interface Question {
  id: number
  text: string
  answers: Answer[]
}

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Shuffle answers for each question
function createQuestionWithShuffledAnswers(id: number, text: string, answers: Omit<Answer, "id">[]): Question {
  const answersWithIds = answers.map((answer, index) => ({
    ...answer,
    id: index,
  }))

  return {
    id,
    text,
    answers: shuffleArray(answersWithIds),
  }
}

export const questions: Question[] = [
  createQuestionWithShuffledAnswers(1, "How do you feel about talking to new people every day?", [
    { text: "I love it! I genuinely enjoy meeting and talking to new people", score: 3 },
    { text: "I'm comfortable with it and can do it professionally", score: 2 },
    { text: "I can do it but it drains my energy", score: 1 },
    { text: "I prefer to avoid interactions with strangers", score: 0 },
  ]),
  createQuestionWithShuffledAnswers(
    2,
    "When someone is angry or frustrated with you (even if it's not your fault), how do you react?",
    [
      { text: "I stay calm, listen, and don't take it personally", score: 3 },
      { text: "It bothers me a bit but I can handle it professionally", score: 2 },
      { text: "I get defensive or upset and need time to recover", score: 1 },
      { text: "I take it very personally and it affects my mood for hours", score: 0 },
    ],
  ),
  createQuestionWithShuffledAnswers(
    3,
    "How comfortable are you with NOT being able to solve someone's problem immediately?",
    [
      { text: "Perfectly fine - I focus on capturing information and helping them feel heard", score: 3 },
      { text: "I'd prefer to solve it, but I understand that's not always my role", score: 2 },
      { text: "It frustrates me - I like to fix things", score: 1 },
      { text: "I need to solve problems or I feel unfulfilled", score: 0 },
    ],
  ),
  createQuestionWithShuffledAnswers(
    4,
    "Someone calls and rambles for 5 minutes about their issue without being clear. How do you handle this?",
    [
      { text: "I listen patiently, then ask clarifying questions to understand the core issue", score: 3 },
      { text: "I listen but gently guide them to get to the point", score: 2 },
      { text: "I interrupt to save time and get the facts", score: 1 },
      { text: "I get impatient and want them to hurry up", score: 0 },
    ],
  ),
  createQuestionWithShuffledAnswers(5, "How do you feel about repetitive tasks and similar conversations?", [
    { text: "I find rhythm in routine and focus on making each interaction good", score: 3 },
    { text: "I can handle repetition if the work is meaningful", score: 2 },
    { text: "I get bored quickly with repetition", score: 1 },
    { text: "I need constant variety or I lose motivation", score: 0 },
  ]),
  createQuestionWithShuffledAnswers(6, "Rate your attention to detail when capturing information:", [
    { text: "Very careful - I double-check names, numbers, and spelling", score: 3 },
    { text: "Generally careful but occasional mistakes happen", score: 2 },
    { text: "I focus on the big picture, details aren't my strength", score: 1 },
    { text: "I often miss small details", score: 0 },
  ]),
  createQuestionWithShuffledAnswers(7, "When you don't know the answer to a customer's question, what do you do?", [
    { text: "I'm comfortable saying \"I don't know, but I'll find out for you\"", score: 3 },
    { text: "I try to figure it out first, then escalate if needed", score: 2 },
    { text: "I feel uncomfortable admitting I don't know", score: 1 },
    { text: "I might give my best guess rather than say I don't know", score: 0 },
  ]),
  createQuestionWithShuffledAnswers(8, "How would you describe your natural speaking voice on the phone?", [
    { text: "Clear, warm, and naturally upbeat - people say I sound friendly", score: 3 },
    { text: "Clear and professional, though not particularly expressive", score: 2 },
    { text: "Sometimes told I speak too fast or unclear", score: 1 },
    { text: "Monotone or quiet - I'm not great on the phone", score: 0 },
  ]),
  createQuestionWithShuffledAnswers(9, "Your shift is 12:00-20:00. How reliable can you be with this schedule?", [
    { text: "Very reliable - I'm rarely sick and take my commitments seriously", score: 3 },
    { text: "Generally reliable with occasional unavoidable absences", score: 2 },
    { text: "I try my best but have other commitments that sometimes conflict", score: 1 },
    { text: "My schedule is unpredictable and changes often", score: 0 },
  ]),
  createQuestionWithShuffledAnswers(10, "How do you handle receiving feedback about your work?", [
    { text: "I welcome it and actively seek ways to improve", score: 3 },
    { text: "I accept it professionally even if it stings a bit", score: 2 },
    { text: "I get defensive initially but eventually accept it", score: 1 },
    { text: "I take criticism very personally", score: 0 },
  ]),
]
