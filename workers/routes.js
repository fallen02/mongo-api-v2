const router = require('express').Router()
const { dataValidation } = require('./dataValidation')
const Student = require('./schema')


router.post('/addnew', async (req, res) => {

    const {error}  = dataValidation(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const student = new Student({...req.body})
    try{
        const saved = await student.save()
        res.send({saved: true, id: saved._id})
    } catch(err) {
        res.status(400).send(err)
    }

    
})


module.exports = router