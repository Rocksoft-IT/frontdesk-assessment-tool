"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface WelcomeScreenProps {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/657328ba1c235db6eb38eae7/6576f54b11a364f6eeec4a43_Clip%20path%20group.svg"
              alt="Rocksoft Logo"
              className="h-10 w-auto"
            />
            <h1 className="font-serif text-2xl font-bold text-rocksoft-dark">Rocksoft</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-rocksoft-dark leading-tight text-balance">
              FrontDesk Call Center Agent Assessment
            </h1>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-rocksoft-blue text-balance">
              Discover if this role matches your strengths
            </h3>
          </div>

          {/* Info Card */}
          <Card className="p-8 bg-white border-2 border-gray-100 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-rocksoft-blue text-3xl">schedule</span>
                <div>
                  <p className="font-sans text-lg text-rocksoft-dark leading-relaxed">
                    <strong className="font-semibold">Takes 5-7 minutes</strong> to complete
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-rocksoft-blue text-3xl">check_circle</span>
                <div>
                  <p className="font-sans text-lg text-rocksoft-dark leading-relaxed">
                    <strong className="font-semibold">10 questions</strong> about your work style
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-rocksoft-blue text-3xl">target</span>
                <div>
                  <p className="font-sans text-lg text-rocksoft-dark leading-relaxed">
                    <strong className="font-semibold">Instant feedback</strong> on your fit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-rocksoft-blue text-3xl">lightbulb</span>
                <div>
                  <p className="font-sans text-lg text-rocksoft-dark leading-relaxed">
                    <strong className="font-semibold">Honest guidance</strong> to help you decide
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Intro Text */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-xl text-rocksoft-dark leading-relaxed text-pretty">
              This assessment helps you discover if the FrontDesk position aligns with your natural strengths.{" "}
              <strong className="font-semibold">IMPORTANT:</strong> Your answers are completely private. They are NOT
              sent to us unless you decide to apply after seeing your results. Please answer honestly - this tool is
              designed to help YOU make the right decision.
            </p>
          </div>

          {/* Privacy Notice Box */}
          <Card className="p-6 bg-rocksoft-blue/5 border-2 border-rocksoft-blue/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-rocksoft-blue text-3xl">lock</span>
                <h3 className="font-sans text-xl font-bold text-rocksoft-dark">Your Privacy:</h3>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="font-sans text-base text-rocksoft-dark leading-relaxed flex items-start gap-2">
                  <span className="text-rocksoft-blue mt-1">•</span>
                  <span>Your answers stay on YOUR device</span>
                </li>
                <li className="font-sans text-base text-rocksoft-dark leading-relaxed flex items-start gap-2">
                  <span className="text-rocksoft-blue mt-1">•</span>
                  <span>Nothing is sent to Rocksoft automatically</span>
                </li>
                <li className="font-sans text-base text-rocksoft-dark leading-relaxed flex items-start gap-2">
                  <span className="text-rocksoft-blue mt-1">•</span>
                  <span>Only YOU see your results</span>
                </li>
                <li className="font-sans text-base text-rocksoft-dark leading-relaxed flex items-start gap-2">
                  <span className="text-rocksoft-blue mt-1">•</span>
                  <span>You decide if you want to contact us afterward</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={onStart}
              size="lg"
              className="bg-rocksoft-blue hover:bg-rocksoft-blue/90 text-white font-semibold text-lg px-12 py-6 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              Start Assessment
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="font-sans text-sm text-gray-600">Made with passion by Rocksoft team</p>
          <p className="font-sans text-xs text-gray-500">© {new Date().getFullYear()} Rocksoft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
