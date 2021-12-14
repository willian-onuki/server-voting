const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => {

    try {

    } catch(err) {

    }

    res.status(200).send({
        message: 'POST of Votation route'
    })
})

// VOTO
router.post('/participate/:keyVotation', (req, res, next) => {
    const id = req.params.keyVotation
    res.status(200).send({
        message: 'PARTICIPATE of Votation route',
        id: id
    })
})

router.put('/:votation_id', (req, res, next) => {
    const votation_id = req.query.votation_id

    res.status(200).send({
        message: 'FINISH of Votation route',
        votation_id
    })
})

router.get('/', (req, res, next) => {
    const user_id = req.query.user_id
    console.log("========", user_id)
    res.status(200).send({
        message: 'HISTORY of Votation route',
        user_id
    })
})

module.exports = router