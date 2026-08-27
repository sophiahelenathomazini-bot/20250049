const express = require('express');
const app = express();

const PORTA = 4000;

app.get('/', (req, res) => {
    res.send('Servidor Express funcionando corretamente');
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'operacional',
        data: new Date()
    });
});    

app.get('/api/dados', (req, res) => {
    res.status(201).json({
        mensagem: 'Registro recebido com sucesso via POST'
    });
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORTA}`);
});