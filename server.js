import http from "http"
import {Server} from "socket.io"

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Store rooms and users
const rooms = new Map();
const users = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('join-room', (roomId, userId, isHost) => {
    console.log(`User ${userId} joining room ${roomId} as ${isHost ? 'host' : 'listener'}`);
    
    socket.join(roomId);
    users.set(socket.id, { userId, roomId, isHost });
    
    // Initialize room if it doesn't exist
    if (!rooms.has(roomId)) {
      rooms.set(roomId, {
        id: roomId,
        host: isHost ? userId : null,
        participants: new Map()
      });
    }
    
    const room = rooms.get(roomId);
    room.participants.set(userId, { id: userId, isHost, socketId: socket.id });
    
    // Notify others in the room
    socket.to(roomId).emit('user-joined', { userId, isHost });
    
    // Send room info to the new user
    const participantsList = Array.from(room.participants.values());
    socket.emit('room-participants', participantsList);
  });
  
  // WebRTC signaling events
  socket.on('offer', (data) => {
    console.log('Offer from', data.from, 'to', data.to);
    // Broadcast to room excluding sender
    socket.broadcast.emit('offer', {
      offer: data.offer,
      from: data.from
    });
    console.log('Offer broadcasted to room');
  });
  
  socket.on('answer', (data) => {
    console.log('Answer from', data.from, 'to', data.to);
    // Broadcast to room excluding sender
    socket.broadcast.emit('answer', {
      answer: data.answer,
      from: data.from
    });
    console.log('Answer broadcasted to room');
  });
  
  socket.on('ice-candidate', (data) => {
    console.log('ICE candidate from', data.from, 'to', data.to);
    // Broadcast to room excluding sender
    socket.broadcast.emit('ice-candidate', {
      candidate: data.candidate,
      from: data.from
    });
    console.log('ICE candidate broadcasted to room');
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    
    const user = users.get(socket.id);
    if (user) {
      const { roomId, userId } = user;
      const room = rooms.get(roomId);
      
      if (room) {
        room.participants.delete(userId);
        
        // If room is empty, delete it
        if (room.participants.size === 0) {
          rooms.delete(roomId);
        }
        
        // Notify others in the room
        socket.to(roomId).emit('user-left', userId);
      }
      
      users.delete(socket.id);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`);
});