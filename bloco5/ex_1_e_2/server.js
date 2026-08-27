const express = require('express');
const rotasUsuarios = require('./src/routes/rotasUsuarios');
const rotasProdutos = require('./src/routes/rotasProdutos');

const app = express();

app.use(express.json());

app.use('/api', rotasUsuarios);
app.use('/api', rotasProdutos);

app.listen(3000, () => {
    console.log("Servidor modularizado rodando na porta 3000");
});