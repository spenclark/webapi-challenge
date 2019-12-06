const express = require("express")
const helmet = require("helmet")

const server = express()

server.use(helmet())

server.get('/', (req, res) => {
    res.send('<h2>:)<h2>')
})

module.exports = server