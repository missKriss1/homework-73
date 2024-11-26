import express from 'express';
import pkg from 'caesar-salad';
const { Vigenere } = pkg;

const app = express();
const port = 8000;

const password = 'hello';

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/hello', (req, res) => {
    return res.send('<h1>Hello!</h1>');
});

app.get('/encode/:text', (req, res) => {
    const { text } = req.params;
    const cipher =  Vigenere.Cipher(password);
    const encryptedText = cipher.crypt(text);
    return res.send(encryptedText);
});

app.get('/decode/:text', (req, res) => {
    const { text } = req.params;
    const cipher =  Vigenere.Decipher(password);
    const decryptedText = cipher.crypt(text);
    return res.send(decryptedText);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
