const express = require('express');
const app = express();

app.use(express.json());

app.get('/saudacao', (req, res) => {
    const {nome} = req.query;
    const nomeFinal = nome ? nome : 'Convidado';
    res.send(`Olá, ${nomeFinal}!`);
});

app.listen(3000, () => {
    console.log(`Servidor rodando no endereço http://localhost:3000`);
});