const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'GET of Pedidos route'
    })
})

router.post('/', (req, res, next) => {
    const order = {
        product_id: req.body.product_id,
        quantity: req.body.quantity
    }

    res.status(200).send({
        message: 'POST of Pedidos route',
        oderCreated: order
    })
})

router.get('/:id_pedido', (req, res, next) => {
    res.status(200).send({
        message: 'GET with id params of Pedidos rourte'
    })
})

router.patch('/', (req, res, next) => {
    res.status(200).send({
        message: 'PATCH of Pedidos route'
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).send({
        message: 'DELETE of Pedidos route'
    })
})

module.exports = router