const Joi = require('@hapi/joi')

const dataValidation = (data) =>{
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

    return validationSchema.validate(data)
    
}

module.exports.dataValidation = dataValidation