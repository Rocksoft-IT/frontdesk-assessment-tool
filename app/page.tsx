"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import WelcomeScreen from "@/components/welcome-screen"
import QuestionScreen from "@/components/question-screen"
import ResultsScreen from "@/components/results-screen"
import { type Question, shuffleArray } from "@/lib/questions"
import { questions as originalQuestions } from "@/lib/questions"

type Screen = "welcome" | "questions" | "results"

export default function AssessmentPage() {
  const [screen, setScreen] = useState<Screen>("welcome")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])

  useEffect(() => {
    // Randomize questions on mount
    setShuffledQuestions(shuffleArray(originalQuestions))
  }, [])

  const handleStart = () => {
    setScreen("questions")
    setCurrentQuestionIndex(0)
    setAnswers({})
  }

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    setScreen("results")
  }

  const handleRetake = () => {
    setScreen("welcome")
    setCurrentQuestionIndex(0)
    setAnswers({})
    // Re-randomize questions
    setShuffledQuestions(shuffleArray(originalQuestions))
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0)
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1
  const hasAnsweredCurrent = currentQuestion && answers[currentQuestion.id] !== undefined

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {screen === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}

        {screen === "questions" && currentQuestion && (
          <motion.div
            key={`question-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionScreen
              question={currentQuestion}
              currentIndex={currentQuestionIndex}
              totalQuestions={shuffledQuestions.length}
              selectedAnswer={answers[currentQuestion.id]}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSubmit={handleSubmit}
              isLastQuestion={isLastQuestion}
              canGoBack={currentQuestionIndex > 0}
              hasAnswered={hasAnsweredCurrent}
            />
          </motion.div>
        )}

        {screen === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultsScreen score={calculateScore()} totalQuestions={shuffledQuestions.length} onRetake={handleRetake} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
