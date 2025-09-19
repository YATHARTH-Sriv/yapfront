"use client"

export default function ScheduledRooms() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Scheduled Rooms</h1>
        <p className="text-gray-400">Upcoming audio sessions you&apos;ve scheduled or marked to attend</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder scheduled rooms */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/10">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                📅 SCHEDULED
              </div>
              <span className="text-gray-400 text-sm">Tomorrow 3:00 PM</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Weekly Tech Discussion #{i}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Join us for our weekly discussion about the latest in technology and innovation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">23 attending</span>
              <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Set Reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
