const { Client } = require('pg')
const client = new Client({
    user: "postgres",
    password: "willian1",
    host: "localhost",
    port: 5432,
    database: "server_votation"
})

module.exports = client