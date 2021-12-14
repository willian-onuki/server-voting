const express = require('express')
const app = express() // the app is an instance of express
const morgan = require('morgan') // observes all of routes and return a log of each route accessed
const bodyParser = require('body-parser') // to define the input body of request
const db = require('./database')
const routerProduto = require('./routes/produto') // reference of the produto.js
const routerPedidos = require('./routes/pedidos') // reference of pedidos router

const routerUsers = require('./routes/users')
const routerVotation = require('./routes/votation')

db.connect()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false })) // accept only simple data
app.use(bodyParser.json()) // accept only JSON format as input data

// Header configuration
app.use((req, res, next) => {
    res.header('Access-Controll-Allow-Origin', '*') // allow access the header to all
    // what kind of header the api server will be allowed
    res.header(
        'Access-Controll-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    // what kind of option will be allowed when the client calls the api server
    if (req.method == 'OPTIONS') {
        res.header('Access-Controll-Allow-Method', 'PUT, POST , PATCH, DELETE, GET')
        return res.status(200).send({})
    }

    next()
})

app.use('/produto', routerProduto)
app.use('/pedidos', routerPedidos)

app.use('/users', routerUsers)
app.use('/votation', routerVotation)
// app.use('/teste' ,(req, res, next) => {
//     // req is a request, res,  a response, and next, to call a other method
//     res.status(200).send({
//         message: 'DEU BOM'
//     })
// })

app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)

    return res.send({
        err: {
            message: error.message
        }
    })
})

module.exports = app; // exports the app from others files passing all of the content