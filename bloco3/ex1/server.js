const express = require('express');
const app = express();

app.use(express.json());

app.get('/saudacao', (req, res) => {
    const {nome} = req.query;
    const nomeFinal = nome ? nome : 'Convidado';
    res.send(`Olá, ${noemFinal}!`);
});

app.listen(3000, () => {
    console.log('Servido escutando na porta 3000');
});