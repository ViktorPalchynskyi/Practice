import express from 'express';
import cors from 'cors';
const app = express();
const jsonParser = express.json();

const port = 3000;

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

app.use('/live-update', (req, res) => {
  res.writeHead(200, {
    'Connection': 'keep-alive',
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
