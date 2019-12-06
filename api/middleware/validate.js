// function validateId(req, res, next) {
//     let id = req.params.id
//     db.get(id)
//         .then(data => {
//             if(data) {
//                 next()
//             } else {
//                 res.status(400).json({ message: "Id is invalid"})
//             }
//         })
//         .catch( error => {
//             res.status(500).json({error: 'Access Denied'})
//         })
// }

// module.exports = validateId