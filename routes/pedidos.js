const express = require('express');
const router = express.Router();

// Retorna todos os Pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Pedidos'
    });
});

// Adiciona um Pedido
router.post('/', (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantididade: req.body.quantididade
    }

    res.status(201).send({
        mensagem: 'Pedido criado',
        pedidoCriado: pedido
    });
});

// Retorna os dados de um Pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    res.status(200).send({
        mensagem: 'Detalhes do Pedido',
        id_pedido: id
    });
})

// Exclui um Pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído'
    });
});

module.exports = router;