const router = require('express').Router()
const Joi = require('@hapi/joi')
const Student = require('./schema')

const validationSchema = Joi.object({
    fName: Joi.string().min(6).required(),
    gardianName: Joi.string().min(6).required(),
    address: {
        village: Joi.string().min(5).required(),
        postOffice: Joi.string().min(5).required(),
        district: Joi.string().min(5).required(),
        pinCode: Joi.number().min(6).required(),
    },
    educationDetails: {
        e0: {
            examName: Joi.string().required(),
            board: Joi.string().required(),
            institute: Joi.string().required(),
            percent: Joi.number().required(),
            passingYear: Joi.number().required(),
        },
        e1: {
            examName: Joi.string().required(),
            board: Joi.string().required(),
            institute: Joi.string().required(),
            percent: Joi.number().required(),
            passingYear: Joi.number().required(),
        }
    }
})

router.post('/addnew', async (req, res) => {

    const {error} = validationSchema.validate(req.body)
    if(error){
        res.status(400).send(error)
    }
    const student = new Student({...req.body})
    try{
        const saved = await student.save()
        res.send(saved)
    } catch(err) {
        res.status(400).send(err)
    }

    
})


module.exports = router