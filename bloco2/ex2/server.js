const express = require('express');
const app = express();

const PORTA = 4000;

app.get('/', (req, res) => {
    res.send('Bem vindo ao meu site');
});

app.get('/sobre', (req, res) => {
    res.send('Sou estudante de desenvolvimento de software');
});

app.get('/contato', (req, res) => {
    res.send('sophiahelena.thomazini@gmail.com');
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'operacional',
        data: new Date()
    });
});

app.post('/api/dados', (req, res) => {
    res.status(201).json({
        mensagem: 'Registro recebido com sucesso via POST.'
    });
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORTA}`);
});