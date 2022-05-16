const express = require('express');
const server = express();

server.use(express.json());

const TabelaPessoa = ['Joana,23 anos', 'Lucas,23 anos', 'Pedro 25 anos', 'Paulo 43'];
server.get('/TabelaPessoa/:index', (req, res) => {
    const { index } = req.params;
    return res.json(TabelaPessoa[index]);
});
server.get('/TabelaPessoa', (req, res) =>{
    return res.json(TabelaPessoa);
});
server.post('/TabelaPessoa', (req, res) => {
    const { name } = req.body;
    TabelaPessoa.push(name);
    return res.json(TabelaPessoa);
});
server.put('/TabelaPessoa/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    TabelaPessoa[index] = name;
    return res.json(TabelaPessoa);
});
server.delete('/TabelaPessoa/:index', (req, res) => {
    const { index } = req.params;
    TabelaPessoa.splice(index, 1);
    return res.json({message: "Excluido"});
});


server.listen(3000);