const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'I am in the GET of Product route'
    })
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }

    res.status(201).send({
        message: 'I am in the POST of Product route',
        productCreated: product
    })
})

// this route will be get a specify product by id that was passed as parameter
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto // after /: is interpreted as params and it will be the setted value of const id

    if (id == 1) {
        res.status(200).send({
            message: 'Using the GET of Product route that contain an id of a product',
            id: id
        })
    } else {
        res.status(400).send({
            message: 'ID NOT FOUND',
            id: id
        })
    }

})

// the patch is used to change a product
router.patch('/', (req, res, next) => {
    res.status(200).send({
        message: 'I am in the PATCH of Product route'
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).send({
        message: 'I am in the DELETE of Product route'
    })
})

module.exports = router