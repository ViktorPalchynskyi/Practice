import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
  });

  ws.send('Welcome to the websocket server!');
});

server.listen(3000, function listening() {
  console.log('Listening on %d', server.address().port);
});