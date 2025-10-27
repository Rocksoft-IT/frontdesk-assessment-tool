"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ResultsScreenProps {
  score: number
  totalQuestions: number
  onRetake: () => void
}

export default function ResultsScreen({ score, totalQuestions, onRetake }: ResultsScreenProps) {
  const maxScore = totalQuestions * 3
  const percentage = Math.round((score / maxScore) * 100)

  // Determine result tier
  let tier: "excellent" | "good" | "poor"
  if (percentage >= 80) tier = "excellent"
  else if (percentage >= 60) tier = "good"
  else tier = "poor"

  const getResultColor = () => {
    if (tier === "excellent") return "from-rocksoft-success to-green-400"
    if (tier === "good") return "from-orange-500 to-orange-400"
    return "from-rocksoft-warning to-red-400"
  }

  const getResultIcon = () => {
    if (tier === "excellent") return "landscape"
    if (tier === "good") return "handshake"
    return "explore"
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/657328ba1c235db6eb38eae7/6576f54b11a364f6eeec4a43_Clip%20path%20group.svg"
              alt="Rocksoft Logo"
              className="h-8 w-auto"
            />
            <span className="font-serif text-xl font-bold text-rocksoft-dark">Rocksoft</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Score Circle */}
          <div className="flex flex-col items-center space-y-6">
            <div
              className={`w-48 h-48 rounded-full bg-gradient-to-br ${getResultColor()} flex flex-col items-center justify-center shadow-xl`}
            >
              <span className="material-symbols-outlined text-white text-6xl mb-2">{getResultIcon()}</span>
              <span className="font-serif text-5xl font-bold text-white">{percentage}%</span>
              <span className="font-sans text-sm text-white/90">
                {score} / {maxScore} points
              </span>
            </div>

            <p className="font-sans text-base text-gray-600 text-center">Here's what we discovered together:</p>
          </div>

          {/* Excellent Fit (80-100%) */}
          {tier === "excellent" && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-rocksoft-dark text-balance">
                  You're Ready for This Summit! 🏔️
                </h2>
                <p className="font-sans text-xl text-rocksoft-dark leading-relaxed max-w-3xl mx-auto text-pretty">
                  Your responses show you have exactly what we're looking for in a FrontDesk agent. Your natural people
                  skills, emotional resilience, and reliable approach make you an excellent fit for this role.
                </p>
              </div>

              <Card className="p-8 bg-green-50 border-2 border-rocksoft-success">
                <h4 className="font-serif text-2xl font-semibold text-rocksoft-dark mb-6">Your Strengths</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-rocksoft-success text-2xl">check_circle</span>
                    <div>
                      <p className="font-sans font-semibold text-rocksoft-dark">People Skills</p>
                      <p className="font-sans text-gray-700">You genuinely enjoy helping others</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-rocksoft-success text-2xl">check_circle</span>
                    <div>
                      <p className="font-sans font-semibold text-rocksoft-dark">Emotional Resilience</p>
                      <p className="font-sans text-gray-700">You handle challenges professionally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-rocksoft-success text-2xl">check_circle</span>
                    <div>
                      <p className="font-sans font-semibold text-rocksoft-dark">Clear Communication</p>
                      <p className="font-sans text-gray-700">You're patient and articulate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-rocksoft-success text-2xl">check_circle</span>
                    <div>
                      <p className="font-sans font-semibold text-rocksoft-dark">Reliability</p>
                      <p className="font-sans text-gray-700">You're dependable and committed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-rocksoft-success text-2xl">check_circle</span>
                    <div>
                      <p className="font-sans font-semibold text-rocksoft-dark">Growth Mindset</p>
                      <p className="font-sans text-gray-700">You welcome feedback and improvement</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-rocksoft-blue/5 border-2 border-rocksoft-blue">
                <p className="font-sans text-xl text-rocksoft-dark leading-relaxed">
                  <strong className="font-bold">We'd love to climb together.</strong> Your profile aligns perfectly with
                  what makes great FrontDesk agents successful.
                </p>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-rocksoft-blue hover:bg-rocksoft-blue/90 text-white font-semibold text-lg px-8"
                >
                  <a href="mailto:rekrutacja@rocksoft.pl?subject=FrontDesk Agent Application - High Scorer">
                    Apply Now
                  </a>
                </Button>
                <Button
                  onClick={onRetake}
                  variant="outline"
                  size="lg"
                  className="font-semibold text-lg px-8 bg-transparent"
                >
                  Retake Assessment
                </Button>
              </div>

              <div className="text-center space-y-2 pt-4">
                <p className="font-sans text-lg font-semibold text-rocksoft-dark">Contact Us</p>
                <p className="font-sans text-base text-gray-700">📧 rekrutacja@rocksoft.pl</p>
                <p className="font-sans text-base text-gray-700">📱 +48 534 128 018</p>
              </div>
            </div>
          )}

          {/* Good Potential (60-79%) */}
          {tier === "good" && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-rocksoft-dark text-balance">
                  You Have Potential - Let's Talk 🤝
                </h2>
                <p className="font-sans text-xl text-rocksoft-dark leading-relaxed max-w-3xl mx-auto text-pretty">
                  You have several strengths that would work well in this position. There are some areas that might
                  require development or adjustment, but with the right mindset, you could be successful.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-green-50 border-2 border-rocksoft-success">
                  <h4 className="font-serif text-2xl font-semibold text-rocksoft-dark mb-4">Your Strengths</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-rocksoft-success text-xl">check_circle</span>
                      <p className="font-sans text-gray-700 leading-relaxed">
                        You have solid foundational skills for customer service
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-rocksoft-success text-xl">check_circle</span>
                      <p className="font-sans text-gray-700 leading-relaxed">You show commitment and professionalism</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-orange-50 border-2 border-orange-500">
                  <h4 className="font-serif text-2xl font-semibold text-rocksoft-dark mb-4">Areas to Consider</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-orange-600 text-xl">info</span>
                      <p className="font-sans text-gray-700 leading-relaxed">
                        Some aspects of the role might feel challenging at first
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-orange-600 text-xl">info</span>
                      <p className="font-sans text-gray-700 leading-relaxed">
                        Comfort with repetition and routine is important
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-orange-600 text-xl">info</span>
                      <p className="font-sans text-gray-700 leading-relaxed">
                        Emotional resilience is key for difficult customer interactions
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-blue-50 border-2 border-rocksoft-blue">
                <h4 className="font-serif text-2xl font-semibold text-rocksoft-dark mb-4">Reflection Questions</h4>
                <div className="space-y-3">
                  <p className="font-sans text-gray-700 leading-relaxed">
                    💭 Are you willing to develop skills in areas where you scored lower?
                  </p>
                  <p className="font-sans text-gray-700 leading-relaxed">
                    💭 Can you thrive in a structured, routine-focused environment?
                  </p>
                  <p className="font-sans text-gray-700 leading-relaxed">
                    💭 How do you typically handle frustration from others?
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-rocksoft-blue/5 border-2 border-rocksoft-blue">
                <p className="font-sans text-xl text-rocksoft-dark leading-relaxed">
                  <strong className="font-bold">Let's have a conversation.</strong> We'd like to understand your
                  motivations and discuss whether this role aligns with your goals.
                </p>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-rocksoft-blue hover:bg-rocksoft-blue/90 text-white font-semibold text-lg px-8"
                >
                  <a href="mailto:rekrutacja@rocksoft.pl?subject=FrontDesk Agent Discussion - Moderate Scorer">
                    Schedule a Discussion
                  </a>
                </Button>
                <Button
                  onClick={onRetake}
                  variant="outline"
                  size="lg"
                  className="font-semibold text-lg px-8 bg-transparent"
                >
                  Retake Assessment
                </Button>
              </div>
            </div>
          )}

          {/* Not Right Fit (<60%) */}
          {tier === "poor" && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-rocksoft-dark text-balance">
                  A Different Summit Might Suit You Better 🧭
                </h2>
                <p className="font-sans text-xl text-rocksoft-dark leading-relaxed max-w-3xl mx-auto text-pretty">
                  Based on your responses, the FrontDesk role may not align well with your natural strengths and
                  preferences. This doesn't mean you lack talent - it means there might be better-fitting opportunities
                  for you.
                </p>
              </div>

              <Card className="p-8 bg-red-50 border-2 border-rocksoft-warning">
                <h4 className="font-serif text-2xl font-semibold text-rocksoft-dark mb-4">
                  Why This May Not Be The Right Fit
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-rocksoft-warning text-xl">info</span>
                    <p className="font-sans text-gray-700 leading-relaxed">
                      FrontDesk work requires high daily people interaction
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-rocksoft-warning text-xl">info</span>
                    <p className="font-sans text-gray-700 leading-relaxed">
                      The role involves repetitive tasks and similar conversations
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-rocksoft-warning text-xl">info</span>
                    <p className="font-sans text-gray-700 leading-relaxed">
                      Emotional resilience is essential for handling frustrated customers
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-rocksoft-warning text-xl">info</span>
                    <p className="font-sans text-gray-700 leading-relaxed">
                      You must be comfortable not solving problems directly
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-blue-50 border-2 border-rocksoft-blue">
                <h4 className="font-serif text-2xl font-semibold text-rocksoft-dark mb-4">What Might Fit Better</h4>
                <p className="font-sans text-base text-gray-700 mb-4">Consider roles that align with your strengths:</p>
                <div className="space-y-3">
                  <p className="font-sans text-gray-700 leading-relaxed">
                    💻 <strong>Technical Support</strong> - Problem-solving focused
                  </p>
                  <p className="font-sans text-gray-700 leading-relaxed">
                    📊 <strong>Data Analysis</strong> - Detail-oriented, independent work
                  </p>
                  <p className="font-sans text-gray-700 leading-relaxed">
                    🔧 <strong>Back-Office Operations</strong> - Structured, systems-focused
                  </p>
                  <p className="font-sans text-gray-700 leading-relaxed">
                    🎯 <strong>Specialized Roles</strong> - Deep expertise in specific areas
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-rocksoft-blue/5 border-2 border-rocksoft-blue">
                <p className="font-sans text-xl text-rocksoft-dark leading-relaxed">
                  <strong className="font-bold">We appreciate your honesty.</strong> Finding the right fit serves
                  everyone better. We encourage you to explore roles that match your natural working style.
                </p>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-rocksoft-blue hover:bg-rocksoft-blue/90 text-white font-semibold text-lg px-8"
                >
                  <a href="https://www.rocksoft.pl/career" target="_blank" rel="noopener noreferrer">
                    Explore Other Positions
                  </a>
                </Button>
                <Button
                  onClick={onRetake}
                  variant="outline"
                  size="lg"
                  className="font-semibold text-lg px-8 bg-transparent"
                >
                  Retake Assessment
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 border-t border-gray-100 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="font-sans text-sm text-gray-600">Made with passion by Rocksoft team</p>
          <p className="font-sans text-xs text-gray-500">© {new Date().getFullYear()} Rocksoft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
