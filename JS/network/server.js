import express from 'express';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log('Rout started');
    res.send('<h1>Hello there</h1>')
});

app.post('/user', (req, res) => {
    console.log('POST', {
        req, 
        res
    });
}); 

app.listen(port, () => {
    console.log('Server started');
});