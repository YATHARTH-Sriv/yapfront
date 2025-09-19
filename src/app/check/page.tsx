'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function Check() {
  const [roomId, setRoomId] = useState('');
  const router = useRouter();

  const createRoom = () => {
    const newRoomId = uuidv4();
    router.push(`/room/${newRoomId}?host=true`);
  };

  const joinRoom = () => {
    if (roomId.trim()) {
      router.push(`/room/${roomId.trim()}?host=false`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Audio Chat</h1>
          <p className="text-gray-600">Create or join a voice chat room</p>
        </div>

        <div className="space-y-6">
          {/* Create Room */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Create Room</h2>
            <button
              onClick={createRoom}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Create New Room
            </button>
            <p className="text-sm text-gray-500 mt-2">
              You&apos;ll be the host and can broadcast audio
            </p>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Join Room */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Join Room</h2>
            <div className="space-y-3">
              <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Enter Room ID"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && joinRoom()}
              />
              <button
                onClick={joinRoom}
                disabled={!roomId.trim()}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Join Room
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              You&apos;ll join as a listener
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">Quick Guide:</h3>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Hosts can speak and control their microphone</li>
            <li>• Listeners automatically hear the host&apos;s audio</li>
            <li>• Share the Room ID for others to join</li>
            <li>• Works best with headphones to prevent echo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}