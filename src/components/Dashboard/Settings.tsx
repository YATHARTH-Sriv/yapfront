"use client"

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400">Manage your account and audio preferences</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Audio Settings */}
        <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/10">
          <h3 className="text-white font-semibold text-lg mb-4">🎧 Audio Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Microphone</span>
              <select className="bg-black/50 border border-green-500/20 text-white rounded-lg px-3 py-2">
                <option>Default Microphone</option>
                <option>Built-in Microphone</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Audio Quality</span>
              <select className="bg-black/50 border border-green-500/20 text-white rounded-lg px-3 py-2">
                <option>High Quality</option>
                <option>Standard</option>
                <option>Low Bandwidth</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/10">
          <h3 className="text-white font-semibold text-lg mb-4">🔔 Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Room Invitations</span>
              <input type="checkbox" className="w-5 h-5 text-green-500" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">New Followers</span>
              <input type="checkbox" className="w-5 h-5 text-green-500" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Room Reminders</span>
              <input type="checkbox" className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/10">
          <h3 className="text-white font-semibold text-lg mb-4">🔒 Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Profile Visibility</span>
              <select className="bg-black/50 border border-green-500/20 text-white rounded-lg px-3 py-2">
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Show Online Status</span>
              <input type="checkbox" className="w-5 h-5 text-green-500" defaultChecked />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/10">
          <h3 className="text-white font-semibold text-lg mb-4">👤 Account</h3>
          <div className="space-y-4">
            <button className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg font-medium transition-colors">
              Edit Profile
            </button>
            <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg font-medium transition-colors">
              Change Password
            </button>
            <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg font-medium transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
