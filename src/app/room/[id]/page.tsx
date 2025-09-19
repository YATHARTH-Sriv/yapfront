'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useWebRTC } from '../../../hooks/useWebRTC';
import { v4 as uuidv4 } from 'uuid';

export default function Room() {
  const params = useParams();
  const searchParams = useSearchParams();
  const roomId = params.id as string;
  const isHost = searchParams.get('host') === 'true';
  
  const [userId] = useState(() => uuidv4());
  const [userName, setUserName] = useState('');
  const [joined, setJoined] = useState(false);
  
  const { participants, audioState, startAudio, stopAudio, toggleMute } = useWebRTC(
    joined ? roomId : '', 
    userId, 
    isHost
  );

  const handleJoinRoom = () => {
    if (userName.trim()) {
      setJoined(true);
    }
  };

  if (!joined) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {isHost ? 'Create Room' : 'Join Room'}
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                onKeyPress={(e) => e.key === 'Enter' && handleJoinRoom()}
              />
            </div>
            <div className="text-sm text-gray-600">
              <p><strong>Room ID:</strong> {roomId}</p>
              <p><strong>Role:</strong> {isHost ? 'Host (Speaker)' : 'Listener'}</p>
            </div>
            <button
              onClick={handleJoinRoom}
              disabled={!userName.trim()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isHost ? 'Create & Join Room' : 'Join Room'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Audio Chat Room</h1>
            <div className="text-sm text-gray-600">
              Room ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{roomId}</span>
            </div>
          </div>

          {/* Host Controls */}
          {isHost && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Host Controls</h2>
              <div className="flex gap-4">
                {!audioState.isRecording ? (
                  <button
                    onClick={() => {
                      console.log('Start speaking clicked');
                      startAudio();
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Start Speaking
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        console.log('Stop speaking clicked');
                        stopAudio();
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Stop Speaking
                    </button>
                    <button
                      onClick={() => {
                        console.log('Toggle mute clicked');
                        toggleMute();
                      }}
                      className={`px-4 py-2 rounded-md ${
                        audioState.isMuted 
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                          : 'bg-gray-500 hover:bg-gray-600 text-white'
                      }`}
                    >
                      {audioState.isMuted ? 'Unmute' : 'Mute'}
                    </button>
                  </>
                )}
              </div>
              {audioState.isRecording && (
                <div className="mt-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-gray-600">
                      {audioState.isMuted ? 'Muted' : 'Broadcasting'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Participants List */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">
              Participants ({participants.length})
            </h2>
            <div className="space-y-2">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      participant.isHost ? 'bg-blue-500' : 'bg-green-500'
                    }`}></div>
                    <span className="font-medium">
                      {participant.id === userId ? `${userName} (You)` : `User ${participant.id.slice(0, 8)}`}
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    participant.isHost 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {participant.isHost ? 'Host' : 'Listener'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="text-sm text-gray-600">
            <h3 className="font-semibold mb-2">How it works:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Host can start/stop speaking and control their microphone</li>
              <li>Listeners will automatically hear the host when they start speaking</li>
              <li>Only the host can broadcast audio in this room</li>
              <li>Share this room ID with others to let them join as listeners</li>
            </ul>
            
            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800">Troubleshooting Audio Issues:</h4>
              <ul className="list-disc list-inside space-y-1 text-yellow-700 text-xs mt-2">
                <li>Check browser console (F12) for error messages</li>
                <li>Ensure microphone permission is granted (check address bar)</li>
                <li>Try using headphones to prevent echo</li>
                <li>Refresh both browser windows if no audio</li>
                <li>Make sure both windows are on the same network</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}