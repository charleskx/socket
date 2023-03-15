const express = require('express');
const http = require('http');
const cors = require('cors');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(cors({origin: '*'}));

io.on('connection', (socket) => {
  console.log('Usuário conectado');

  socket.on('mensagem', (mensagem) => {
    console.log(`Mensagem recebida: ${mensagem}`);
    io.emit('mensagem', mensagem);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});