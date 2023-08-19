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
