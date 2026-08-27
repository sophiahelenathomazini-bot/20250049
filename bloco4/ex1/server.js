const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const dataAtual = new Date().toISOString();
    console.log(`[${dataAtual}] Método: ${req.method} | URL: ${req.url}`);
    next();
});

app.get ('/publico', (req,res) => {
    res.send('Esta rota é acessível a qualquer usuário.');
});

app.listen(3000, () => {
    console.log(`Servidor rodando no endereço http://localhost:3000`);
});