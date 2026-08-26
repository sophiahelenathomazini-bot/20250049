const express = require('express');
const app = express();

app.use(express.json());

app.post('/usuarios', (req, res) => {
    const {nome, email} = req.body;

    if(!nome || !email) {
        return res.status(400).json({erro: 'Nome e e-mail são obrigatórios.'});
    }

    res.status(201).json({
        mensagem: 'Usuário criado com sucesso!',
        usuario: {nome, email}
    });
});

app.listen(3000, () => {
    console.log('Servido escutando na porta 3000');
});