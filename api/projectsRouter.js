const express = require("express")

const db = require("../data/helpers/projectModel")
// const mdl = require('./middleware/validate')
const server = express.Router()

server.use(express.json())

// get projects
server.get('/', (req,res) => {
    db.get()
        .then(data =>{
            res.status(200).json({data})
        })
        .catch(error => {
            res.status(500).json({error: 'Failed GET /'})
        })
})
// get projects by ID
server.get('/:id', (req, res) => {
    const id = req.params.id
    db.get(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({error: 'Failed GET /:id'})
        })
})
// get list of actions on project
server.get('/:id/actions', mdl, (req,res) => {
   const id = req.params.id
   db.getProjectActions(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({error: "Failed GET /:id/actions"})
        })
})
// post
server.post('/', (req,res) => {
    const body = req.body;
    db.insert(body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed POST /'})
        })
})

// delete

server.delete('/:id', mdl, (req, res) => {
    const id = req.params.id
    db.remove(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({ error: "Failed DEL /:id"})
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
            res.status(500).json({ error: "Failed PUT /:id"})
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
    
module.exports = server
