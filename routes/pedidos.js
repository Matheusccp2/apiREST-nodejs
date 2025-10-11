const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// Retorna todos os Pedidos
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            "SELECT * FROM pedidos;",
            (error, result, fields) => {
                if (error) { return res.status(500).send({ error: error })}
                const response = {
                    quantidade: result.length,
                    pedidos: result.map(pedido => {
                        return {
                            id_pedido: pedido.id_pedido,
                            id_produto: pedido.id_produto,
                            quantidade: pedido.quantidade,
                            request: {
                                tipo: 'GET',
                                descricao: 'Retorna um pedido específico',
                                url: 'http://localhost:3000/pedidos/' + pedido.id_pedido
                            }
                        }
                    })
                }
                return res.status(200).send(response)
            }
        )
    })
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