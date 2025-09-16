"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show navbar after hero section animation completes
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1200) // Delayed to show after hero content loads

    return () => clearTimeout(timer)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className="text-white font-bold text-xl">YAPhouse</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
            >
              Rooms
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
            >
              How It Works?
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
            >
              About Us
            </a>
          </div>

          {/* CTA Button */}
          <Button className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
