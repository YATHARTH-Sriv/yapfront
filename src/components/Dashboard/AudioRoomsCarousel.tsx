"use client"

import React, { useState } from 'react'
import { Users, Headphones, Mic } from 'lucide-react'

interface AudioRoom {
  id: string
  title: string
  participants: number
  category: 'sports' | 'life' | 'ambiguous'
  host: string
  isLive: boolean
}

const mockRooms: AudioRoom[] = [
  { id: '1', title: 'NBA Finals Discussion', participants: 1247, category: 'sports', host: 'SportsFan23', isLive: true },
  { id: '2', title: 'Work-Life Balance Tips', participants: 892, category: 'life', host: 'LifeCoach_Maya', isLive: true },
  { id: '3', title: 'Is AI Really Conscious?', participants: 567, category: 'ambiguous', host: 'PhilosophyDeep', isLive: true },
  { id: '4', title: 'Premier League Predictions', participants: 1456, category: 'sports', host: 'FootballGuru', isLive: true },
  { id: '5', title: 'Mindfulness & Meditation', participants: 734, category: 'life', host: 'ZenMaster_K', isLive: true },
  { id: '6', title: 'Time Travel Paradoxes', participants: 423, category: 'ambiguous', host: 'ScienceMystic', isLive: true },
  { id: '7', title: 'Tennis Grand Slam Analysis', participants: 689, category: 'sports', host: 'TennisAce', isLive: true },
  { id: '8', title: 'Career Transition Stories', participants: 512, category: 'life', host: 'CareerChangePro', isLive: true },
  { id: '9', title: 'Parallel Universe Theories', participants: 356, category: 'ambiguous', host: 'CosmicThinker', isLive: true },
  { id: '10', title: 'Olympic Swimming Updates', participants: 823, category: 'sports', host: 'SwimCoach_Pro', isLive: true },
  { id: '11', title: 'Healthy Relationship Talks', participants: 645, category: 'life', host: 'RelationshipGuru', isLive: true },
  { id: '12', title: 'Simulation Theory Debate', participants: 289, category: 'ambiguous', host: 'DigitalPhilosopher', isLive: true },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'sports': return 'text-blue-400 bg-blue-500/20'
    case 'life': return 'text-green-400 bg-green-500/20'
    case 'ambiguous': return 'text-purple-400 bg-purple-500/20'
    default: return 'text-gray-400 bg-gray-500/20'
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'sports': return '🏆'
    case 'life': return '💫'
    case 'ambiguous': return '🤔'
    default: return '🎧'
  }
}

interface CarouselRowProps {
  rooms: AudioRoom[]
  direction: 'left' | 'right'
  speed: number
}

const CarouselRow: React.FC<CarouselRowProps> = ({ rooms, direction, speed }) => {
  const [isPaused, setIsPaused] = useState(false)
  
  return (
    <div className="relative overflow-hidden">
      <div 
        className={`flex gap-4 ${isPaused ? '' : 'animate-scroll-' + direction}`}
        style={{ 
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...rooms, ...rooms].map((room, index) => (
          <div
            key={`${room.id}-${index}`}
            className="flex-shrink-0 w-80 bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-4 shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-red-400 font-medium">LIVE</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(room.category)}`}>
                {getCategoryIcon(room.category)} {room.category.toUpperCase()}
              </div>
            </div>
            
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
              {room.title}
            </h3>
            
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Mic className="w-4 h-4" />
                <span>{room.host}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{room.participants.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <button className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                <Headphones className="w-4 h-4" />
                Join Room
              </button>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 bg-gray-600 rounded-full border-2 border-black"></div>
                ))}
                <div className="w-6 h-6 bg-green-500/20 rounded-full border-2 border-black flex items-center justify-center text-xs text-green-400">
                  +
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const AudioRoomsCarousel: React.FC = () => {
  const sportsRooms = mockRooms.filter(room => room.category === 'sports')
  const lifeRooms = mockRooms.filter(room => room.category === 'life')
  const ambiguousRooms = mockRooms.filter(room => room.category === 'ambiguous')

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
          🏆 Sports & Competition
          <span className="text-sm text-gray-400 font-normal">• {sportsRooms.length} active rooms</span>
        </h2>
        <CarouselRow rooms={sportsRooms} direction="left" speed={30} />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
          💫 Life & Growth
          <span className="text-sm text-gray-400 font-normal">• {lifeRooms.length} active rooms</span>
        </h2>
        <CarouselRow rooms={lifeRooms} direction="right" speed={35} />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
          🤔 Deep Thoughts & Mysteries
          <span className="text-sm text-gray-400 font-normal">• {ambiguousRooms.length} active rooms</span>
        </h2>
        <CarouselRow rooms={ambiguousRooms} direction="left" speed={25} />
      </div>
    </div>
  )
}

export default AudioRoomsCarousel
