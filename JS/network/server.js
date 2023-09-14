import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import * as http from 'http';
const app = express();
const jsonParser = express.json();
const clients = new Set();

const port = 3000;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

server.listen(8000, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});

wss.on('connection', (ws) => {
  clients.add(ws);

  ws.on('message', (message) => {
    console.log('message', message);
    message = message.slice(0, 50);

    for (const client of clients) {
      client.send(message);
    }
  });

  ws.on('close', () => clients.delete(ws));
});

// function onSocketConnect(ws) {
//   clients.add(ws);

//   ws.on('message', (message) => {
//     console.log('message', message);
//     message = message.slice(0, 50);

//     for (const client of clients) {
//       client.send(message);
//     }
//   });

//   ws.on('close', () => clients.delete(ws));
// }

app.use(jsonParser);
app.use(
  cors((req, cb) => {
    const allowedOrigins = ['http://127.0.0.1:5500'];
    const corsOptions = {
      credentials: true,
    };

    corsOptions.origin = allowedOrigins.includes(req.header('Origin'));

    cb(null, corsOptions);
  })
);

app.get('/', (req, res) => {
  console.log('Rout started');
  res.send('<h1>Hello there</h1>');
});

app.use('/websocket', (req, res) => {
  console.log('some');
  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});

app.use('/live-update', (req, res) => {
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  });

  let i = 0;
  let timer = setInterval(write, 1000);
  write();

  function write() {
    i++;

    if (i === 4) {
      res.write('event: bye\ndata: buy-buy\n\n');
      clearInterval(timer);
      res.end();
      return;
    }

    res.write('data: ' + i + '\n\n');
  }
});

app.post('/user', (req, res) => {
  console.log('body', req.body);
  res.send({ message: 'success' });
});

app.post('/analytics', (req, res) => {
  console.log('body', req.body);
  res.send({});
});

app.listen(port, () => {
  console.log('Server started');
});
