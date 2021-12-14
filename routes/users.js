const express = require('express')
const users = require('../controller/Users')

const router = express.Router()

router.post('/register',(req, res, next) => {
    try {
        res.json(users.register(req.body))
    } catch (err) {
        console.error("erro na rota registrar", err.message)
        next(err)
    }
})

router.post('/login', (req, res, next) => {
    try {
        res.json(users.login(req.body))
    } catch (err) {
        console.error("erro na rota registrar", err.message)
        next(err)
    }
})

module.exports = router