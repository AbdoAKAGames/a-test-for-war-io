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
    socket.on('create-clan', (clan) => {
        io.emit('create-clan', {id: clan.id, name: clan.name, tag: clan.tag, reqLevel: clan.reqLevel, members: clan.members});
    });
    socket.on('username', username => {
        socket.username = username;
        // io.emit('message', {msg: `${socket.username} just joined the group`, username: 'sys', id: socket.id});
        // socket.on('disconnect', () => {
        //     io.emit('message', {msg: `${username} has left the group`, username: 'sys', id: socket.id});
        // })
    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});