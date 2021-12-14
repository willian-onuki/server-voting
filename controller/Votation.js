const db = require('../database')

async function createVotation () {
    const result = await db.query('INSERT INTO votation (votation_id, title, user_id) VALUES($1, $2, $3)', [body.votation_id, body.title, user_id])
}

module.exports = { createVotation }

