const express = require('express');
const router = express.Router();
const mysql = require("../mysql").pool;

// Retorna todos os Produtos
router.get('/', (req, res, next) => {
    // res.status(200).send({
    //     mensagem: 'Retorna todos os produtos'
    // });

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
    const id = req.params.id_produto;

    if(id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID',
            id: id
        })
    }
})

// Altera / Atualiza um Produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto atualizado'
    });
});

// Exclui um Produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluído'
    });
});

module.exports = router;