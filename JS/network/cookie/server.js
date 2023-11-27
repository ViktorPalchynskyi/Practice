import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log('Rout started');
    res.send('<h1>Hello there!</h1>')
 });

app.get('/set-cookies', (req, res) => {
    const origin = req.get('origin');
    const value = origin ? new URL(origin).host : 'localhost:8080';
    console.log('Origin/value', { origin, value });

    res.cookie('http-only', `${value}-http-only`, { httpOnly: true });
    res.cookie('secure', `${value}-secure`, { secure: true });
    res.cookie('samesite-none', `${value}-samesite-none`, { sameSite: 'none', secure: true });
    res.cookie('samesite-lax', `${value}-samesite-lax`, { sameSite: 'lax' });
    res.cookie('samesite-strict', `${value}-samesite-strict`, { sameSite: 'strict' });

    res.append('Set-Cookie', `partitioned=${value}-partitioned; SameSite=None; Secure; Path=/; Partitioned; HttpOnly`);
    
    res.send('Coolies set');
});

app.get('/get-cookies', (req, res) => {
    console.log(`Cookies: ${JSON.stringify(req.cookies)}`);
    res.json(req.cookies);
});

const listener =  app.listen(8080, () => {
    console.log(`Listening on port ${listener.address().port}`);
});