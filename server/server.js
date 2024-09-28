const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', (message) => {
        io.emit('message', {msg: `${message.username}: ${message.msg}`, username: message.username, id: socket.id});
    });
    socket.on('username', username => {
        socket.username = username;
        io.emit('message', {msg: `${socket.username} just joined the group`, username: 'sys', id: socket.id});
        socket.on('disconnect', () => {
            io.emit('message', {msg: `${username} has left the group`, username: 'sys', id: socket.id});
        })
    })
});

const PORT = process.env.PORT || 2000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});