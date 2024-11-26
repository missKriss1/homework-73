import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/hello', (req, res) => {
    return res.send('<h1>Hello!</h1>');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
