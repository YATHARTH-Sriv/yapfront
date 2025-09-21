"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useWallet } from "@solana/wallet-adapter-react"
import Link from "next/link"

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const words = ["Creators", "Audience"]
  const { wallet} = useWallet()

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 300) // Half of the animation duration
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  })

  const isWalletConnected = Boolean(wallet?.adapter?.publicKey)

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center items-center pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-lime-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-screen-lg w-full mx-auto text-center relative z-10">

        <div
          className={`mb-6 transition-all duration-700 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight px-4">
            <span className="block mb-2">Decentralised Audio Platform</span>
            <span className="block">
              For{" "}
              <span className="relative font-semibold inline-block ml-2">
                <span className="relative z-10 px-3 py-1">{words[currentWordIndex]}</span>
                <div
                  className={`absolute inset-0 border-2 border-lime-400 rounded-lg transform rotate-1 transition-all duration-600 ease-in-out ${
                    isAnimating ? "scale-x-0" : "scale-x-100"
                  }`}
                  style={{ transformOrigin: "center" }}
                ></div>
              </span>
            </span>
          </h1>
        </div>

        <div
          className={`mb-8 max-w-2xl mx-auto px-4 transition-all duration-700 ease-out delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
           A decentralised Audio Platform where the audience gets compensated for the time spent and creators own their share 
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`px-4 transition-all duration-700 ease-out delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative group inline-block">
            <Link href="/dashboard">
            <Button
              disabled={!isWalletConnected}
              className={`px-6 py-3 text-sm sm:text-base transition-all duration-200 
                ${isWalletConnected 
                  ? "bg-lime-400 hover:bg-lime-500 text-black hover:scale-105 hover:shadow-xl hover:shadow-lime-400/30" 
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
                }`}
            >
              Join The Conversation
            </Button>
            </Link>

            {/* Tooltip when disabled */}
            {!isWalletConnected && (
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-lg">
                Connect your wallet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
