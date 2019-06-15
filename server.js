const express = require('express');

const projectRouter = require('./routes/routes');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', );

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the SERVER!</h1>')
});

module.exports = server;