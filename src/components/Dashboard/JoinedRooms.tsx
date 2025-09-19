"use client"

export default function JoinedRooms() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Joined Rooms</h1>
        <p className="text-gray-400">Audio rooms you&apos;ve participated in recently</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder joined rooms */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/10">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                👤 JOINED
              </div>
              <span className="text-gray-400 text-sm">2 hours ago</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Community Chat #{i}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Great discussion about community building and engagement strategies.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                <span className="text-gray-500 text-sm">Host: User{i}</span>
              </div>
              <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Rejoin
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
