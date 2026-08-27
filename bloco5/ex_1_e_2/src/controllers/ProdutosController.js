module.exports = {
    listar(req, res) {
        return res.json([
            { id : 1, nome: 'Garrafa'},
            { id: 2, nome: 'Copo'}
        ]);
    },

    criar(req, res) {
        const {nome} = req.body;
        return res.status(201).json(
            { mensagem: `Produto ${nome} criado com sucesso.`}
        );
    }
};