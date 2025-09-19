const express = require('express');
const router = express.Router();

// Retorna todos os Produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
});

// Adiciona um produto
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto criado'
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