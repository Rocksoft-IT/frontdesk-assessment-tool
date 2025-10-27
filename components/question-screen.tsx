"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Question } from "@/lib/questions"

interface QuestionScreenProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  selectedAnswer?: number
  onAnswer: (questionId: number, score: number) => void
  onNext: () => void
  onPrevious: () => void
  onSubmit: () => void
  isLastQuestion: boolean
  canGoBack: boolean
  hasAnswered: boolean
}

export default function QuestionScreen({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  onSubmit,
  isLastQuestion,
  canGoBack,
  hasAnswered,
}: QuestionScreenProps) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Progress */}
      <header className="w-full py-6 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.prod.website-files.com/657328ba1c235db6eb38eae7/6576f54b11a364f6eeec4a43_Clip%20path%20group.svg"
                alt="Rocksoft Logo"
                className="h-8 w-auto"
              />              
            </div>
            <span className="font-sans text-sm text-gray-600">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-rocksoft-blue transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full space-y-8">
          {/* Question Number Badge */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-rocksoft-blue rounded-full flex items-center justify-center shadow-md">
              <span className="font-serif text-2xl font-bold text-white">{currentIndex + 1}</span>
            </div>
          </div>

          {/* Question Text */}
          <div className="text-center">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-rocksoft-dark leading-tight text-balance">
              {question.text}
            </h3>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {question.answers.map((answer) => (
              <Card
                key={answer.id}
                className={`p-6 cursor-pointer transition-all hover:shadow-md ${
                  selectedAnswer === answer.score
                    ? "border-2 border-rocksoft-blue bg-blue-50"
                    : "border-2 border-gray-200 bg-white hover:border-rocksoft-blue"
                }`}
                onClick={() => onAnswer(question.id, answer.score)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === answer.score
                          ? "border-rocksoft-blue bg-rocksoft-blue"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {selectedAnswer === answer.score && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </div>
                  <p className="font-sans text-lg text-rocksoft-dark leading-relaxed flex-1">{answer.text}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Helper Text */}
          <div className="text-center">
            <p className="font-sans text-sm text-gray-600 italic">Your honest answers help us guide you better.</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between pt-4">
            <Button
              onClick={onPrevious}
              disabled={!canGoBack}
              variant="outline"
              size="lg"
              className="font-semibold bg-transparent"
            >
              Previous
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={onSubmit}
                disabled={!hasAnswered}
                size="lg"
                className="bg-rocksoft-blue hover:bg-rocksoft-blue/90 text-white font-semibold"
              >
                Submit Assessment
              </Button>
            ) : (
              <Button
                onClick={onNext}
                disabled={!hasAnswered}
                size="lg"
                className="bg-rocksoft-blue hover:bg-rocksoft-blue/90 text-white font-semibold"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
