const http = require('http') //importing and create the http service of the own project
const port = process.env.PORT || 3901 // use the 'or' because if the PORT is empty, the 3901 will be the port to use locally
const app = require('./app') // importing the app.js

const server = http.createServer(app) //create the server, and take all of content from the app.js

server.listen(port) // the server will listen the port declared