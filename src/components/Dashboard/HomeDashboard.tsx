"use client"

import AudioRoomsCarousel from "./AudioRoomsCarousel"

export default function HomeDashboard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Live Audio Rooms</h1>
        <p className="text-gray-400">Discover and join conversations happening right now</p>
      </div>
      <AudioRoomsCarousel />
    </div>
  )
}
