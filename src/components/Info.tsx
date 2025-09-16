"use client"

import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function Info() {
  const { ref: headerRef, hasIntersected: headerVisible } = useIntersectionObserver()
  const { ref: cardsRef, hasIntersected: cardsVisible } = useIntersectionObserver()

  const predictionCards = [
    {
      id: 1,
      category: "US10Y",
      title: "What will the yield on the 10-year U.S. Treasury Bond be on June 30, 2025?",
      resolves: "3h left",
      poolSize: "$1,024,000",
      prediction: "6.25%",
      sliderValue: 45
    },
    {
      id: 2,
      category: "Tariff rate",
      title: "What will be the U.S. tariff rate on China on August 15?",
      resolves: "2d left",
      poolSize: "$13,417,562",
      prediction: "60.8%",
      sliderValue: 75
    },
    {
      id: 3,
      category: "U.S. public debt",
      title: "What will be the U.S. public debt (July 2025)?",
      resolves: "7d left",
      poolSize: "$8,231,305",
      prediction: "$40,000,000,000",
      sliderValue: 85
    }
  ]

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-lime-300 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-screen-lg mx-auto relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-lime-400 rounded-full">
            <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            <span className="text-lime-400 text-sm font-medium">Live Predictions</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 px-4">
            Real-time Audio
            <br />
            Content Analytics
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto px-4">
            Track engagement, predict trends, and make data-driven decisions
            <br className="hidden sm:block" />
            for your audio content strategy.
          </p>
        </div>

        {/* Glass Cards Grid */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ease-out delay-200 ${
            cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {predictionCards.map((card, index) => (
            <div 
              key={card.id}
              className={`
                relative bg-black/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6
                hover:border-gray-600/50 transition-all duration-500 hover:bg-black/50
                ${index === 1 ? 'lg:transform lg:scale-105 lg:z-10' : ''}
                ${cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
              style={{ 
                transitionDelay: cardsVisible ? `${index * 200}ms` : '0ms' 
              }}
            >
              {/* Category Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full mb-4">
                <span className="text-gray-300 text-xs font-medium">{card.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-base font-medium mb-6 leading-relaxed">
                {card.title}
              </h3>

              {/* Stats Row */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Resolves:</p>
                  <p className="text-white text-sm font-medium">{card.resolves}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs mb-1">Pool size:</p>
                  <p className="text-white text-sm font-medium">{card.poolSize}</p>
                </div>
              </div>

              {/* Slider Section */}
              <div className="mb-6">
                <div className="relative">
                  {/* Slider Track */}
                  <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-lime-400 to-green-500 rounded-full transition-all duration-300"
                      style={{ width: `${card.sliderValue}%` }}
                    ></div>
                  </div>
                  
                  {/* Slider Handle */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-lime-400 rounded-full shadow-lg border-2 border-white"
                    style={{ left: `calc(${card.sliderValue}% - 8px)` }}
                  ></div>
                </div>

                {/* Slider Labels */}
                <div className="flex justify-between text-gray-400 text-xs mt-2">
                  <span>0</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Prediction Result */}
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Your prediction:</span>
                <span className="text-white text-lg font-bold">{card.prediction}</span>
              </div>

              {/* Glassmorphism overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-lime-400/30">
            Start Analyzing
          </button>
        </div>
      </div>
    </div>
  )
}

export default Info
