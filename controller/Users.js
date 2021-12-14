const db = require('../database')

async function register(body) {
    
    const result = await db.query('INSERT INTO users(id, email, name, cpf, password) VALUES ($1, $2, $3, $4, $5)', [body.id, body.email, body.name, body.cpf, body.password])
    console.log("--------------",result)

    return { result }
}

async function login(body) {
    
}

module.exports = { register, login }