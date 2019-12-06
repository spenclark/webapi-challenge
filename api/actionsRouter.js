const express = require("express")
const db = require("../data/helpers/actionModel")
const server = express.Router()
server.use(express.json())

// get actions
server.get("/", (req, res) => {
    db.get()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({ error: "Failed Get /"})
        })
})

// get by id
server.get("/:id", (req, res) => {
    const id = req.params.id
    db.get(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({ error: "Failed get /:id"})
        })
})
// post

server.post('/', (req, res) => {
    const body = req.body
    db.insert(body)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            res.status(500).json({error: "Failed POST /"})
        })
})

// delete
server.delete("/:id", mdl, (req, res) => {
    const id = req.param.id
    db.remove(id)
        .then(data => {
            res.status(200).json(data)
        })
        .then(error => {
            res.status(500).json({ error: "Failed Delete /"})
        })
})
// put 

server.put('/:id', mdl, (req, res) => {
    const id = req.params.id
    const body = req.body
    db.update(id, body)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({ error: "PUT failed at /id"})
        })
})

// mdl ware
function mdl(req, res, next) {
    let id = req.params.id
    db.get(id)
        .then(data => {
            if(data) {
                next()
            } else {
                res.status(400).json({ message: "Id is invalid"})
            }
        })
        .catch( error => {
            res.status(500).json({error: 'Access Denied'})
        })
}
