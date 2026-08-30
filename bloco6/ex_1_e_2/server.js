const express = require('express');
const app = express();

app.use(express.json());

//Base da dados em memória
let tarefas = [
    {id: 1, titulo: 'Estudar História', concluida: false},
    {id: 2, titulo: 'Fazer um bolo', concluida: false}
];

//READ: Listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

//CREATE: Adicionar nova tarefa
app.post('/tarefas', (req, res) => {
    const {titulo} = req.body;

    if(!titulo) {
        return res.status(400).json({erro: 'O titulo da tarefa é obrigatório'});
    }

    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
        titulo,
        concluida: false
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

//UPDATE: Alterara status de uma tarefa
app.put('/tarefas/:id', (req, res) => {
    const {id} = req.params;
    const {concluida} = req.body;

    const tarefa = tarefas.find(item => item.id === parseInt(id));

    if(!tarefa) {
        return res.status(404).json({erro: 'Tareafa não encontrada'});
    }

    if(typeof concluida === 'boolean') {
        tarefa.concluida = concluida;
    }

    res.json(tarefa);
});

//DELETE: Remover tarefa pelo ID
app.delete('/tarefas/:id', (req, res) =>{
    const {id} = req.params;
    const indice = tarefas.findIndex(item => item.id === parseInt(id));

    if(indice === -1) {
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }

    tarefas.splice(indice, 1);
    res.status(204).send();
});

//Rota Coringa para tratar 404 (Pagina / Rota não encontrada)
app.use((req, res) => {
    res.status(404).json({erro: 'Rota não encontrada na API'});
});

app.listen(3000, () => {
    console.log('API REST de Tarefas rodando na porta 3000');
});