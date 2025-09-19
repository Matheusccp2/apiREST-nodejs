const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

// Usado para apresentar um log de cada execuçao
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); // receber apenas dados simples;
app.use(bodyParser.json()); // trabalhar somente com JSON;

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

// Quando encontrar rota, executa isto:
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status= 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app;