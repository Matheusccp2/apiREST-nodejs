const express = require('express');
const router = express.Router();
const mysql = require("../mysql").pool;

// Retorna todos os Produtos
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            "SELECT * FROM produtos;",
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send({response: resultado})
            }
        )
    })
});

// Adiciona um produto
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
            [req.body.name, req.body.preco],
            (error, resultado, field) => {
                conn.release(); // NUNCA DEIXAR DE USAR | Libera a conexão
                if (error) { return res.status(500).send({ error: error })}
                res.status(201).send({
                    mensagem: 'Produto inserido com sucesso',
                    id_produto: resultado.insertId
                });
            }
        )
    });
});

// Retorna os dados de um Produto
router.get('/:id_produto', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            "SELECT * FROM produtos WHERE id_produto = ?;",
            [req.params.id_produto],
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send({response: resultado})
            }
        )
    })
})

// Altera / Atualiza um Produto
router.patch('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `UPDATE produtos
                SET nome       = ?,
                    preco      = ?
              WHERE id_produto = ?`,
              [
                req.body.nome,
                req.body.preco,
                req.body.id_produto
              ],
            (error, resultado, field) => {
                conn.release(); // NUNCA DEIXAR DE USAR | Libera a conexão
                if (error) { return res.status(500).send({ error: error })}
                res.status(201).send({
                    mensagem: 'Produto alterado com sucesso',
                });
            }
        )
    });
});

// Exclui um Produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluído'
    });
});

module.exports = router;