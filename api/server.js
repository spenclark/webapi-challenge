const express = require("express")
const helmet = require("helmet")

const server = express()

const actionsRouter = require("./actionsRouter.js");
const projectsRouter = require("./projectsRouter.js");


server.use(helmet())
server.use(express.json())
// server.use("/api/project", projectsRouter)
server.use('/api/action', actionsRouter)

server.get('/', (req, res) => {
    res.send('<h2>:)<h2>')
})

module.exports = server