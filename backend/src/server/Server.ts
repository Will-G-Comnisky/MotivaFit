import express from 'express';

const server = express();

server.get('/', (req, res) => {
    return res.send('Olá, você acessou a rota raiz')
});

export {server};
