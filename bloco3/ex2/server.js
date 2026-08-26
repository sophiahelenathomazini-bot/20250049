const express = require('express');
const app = express();

app.use(express.json());

app.get('/produtos/:id', (req, res) => {
    const {id} = req.params;
    if (id ==='10') {
        return res.json({id: 10, nome: 'Notebook', preco: 3500.00});
    }
    res.status(404).json({ mensagem: 'Produto não cadastrado'});
});

app.listen(3000, () => {
    console.log('Servido escutando na porta 3000');
});