const express = require('express');
const app = express();

app.use(express.json());

function verificarToken(req, res, next) {
    const token = req.headers['token'];

    if(!token || token !== 'segredo123') {
        return res.status(401).json(
            {erro: 'Acesso não autorizado. Token inválido ou ausente.'}
        );
    }

    next();
}

app.get('/area-restrita', verificarToken, (req,res) => {
    res.send('Bem vindo à área restrita do sistema.');
});

app.listen(3000, () => {
    console.log('Servidor com middleware rodando na porta 3000');
})