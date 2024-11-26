// Importação da biblioteca Express
const express = require('express');

// Criação de um app Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Simulação de banco de dados em memória
const veiculos = [];
const clientes = [];

// Rotas para Veículos
app.get('/veiculos', (req, res) => {
    res.status(200).json(veiculos);
});

app.post('/veiculos', (req, res) => {
    const veiculo = req.body;
    veiculos.push(veiculo);
    res.status(201).json({ message: 'Veículo adicionado com sucesso', veiculo });
});

app.put('/veiculos/:id', (req, res) => {
    const { id } = req.params;
    const veiculoAtualizado = req.body;
    const index = veiculos.findIndex(v => v.id === id);

    if (index !== -1) {
        veiculos[index] = { ...veiculos[index], ...veiculoAtualizado };
        res.status(200).json({ message: 'Veículo atualizado com sucesso', veiculo: veiculos[index] });
    } else {
        res.status(404).json({ message: 'Veículo não encontrado' });
    }
});

app.delete('/veiculos/:id', (req, res) => {
    const { id } = req.params;
    const index = veiculos.findIndex(v => v.id === id);

    if (index !== -1) {
        veiculos.splice(index, 1);
        res.status(200).json({ message: 'Veículo removido com sucesso' });
    } else {
        res.status(404).json({ message: 'Veículo não encontrado' });
    }
});

// Rotas para Clientes
app.get('/clientes', (req, res) => {
    res.status(200).json(clientes);
});

app.post('/clientes', (req, res) => {
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).json({ message: 'Cliente adicionado com sucesso', cliente });
});

app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const clienteAtualizado = req.body;
    const index = clientes.findIndex(c => c.id === id);

    if (index !== -1) {
        clientes[index] = { ...clientes[index], ...clienteAtualizado };
        res.status(200).json({ message: 'Cliente atualizado com sucesso', cliente: clientes[index] });
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
});

app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const index = clientes.findIndex(c => c.id === id);

    if (index !== -1) {
        clientes.splice(index, 1);
        res.status(200).json({ message: 'Cliente removido com sucesso' });
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
});

// Rota principal do servidor
app.get('/', (req, res) => {
    res.send('Esta é a raiz do servidor.');
});

// Definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

// Rodar a aplicação
app.listen(port, hostname, () => {
    console.log("Servidor rodando...");
});
