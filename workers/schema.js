const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    gardianName: {
        type: String,
        required: true,
        max: 255
    },
    address:{
        village: {
            type: String,
            required: true,
            min: 5
        },
        postOffice: {
            type: String,
            required: true,
            min: 5
        },
        district: {
            type: String,
            required: true,
            min: 5
        },
        pinCode: {
            type: Number,
            required: true,
            min: 6
        }
    },
    admissionDate: {
        type: Date,
        default: Date.now
    },
    educationDetails: {
        e0: {
            examName: {
                type: String,
                required: true,
            },
            board: {
                type: String,
                required: true
            },
            institute: {
                type: String,
                required: true
            },
            percent: {
                type: Number,
                required: true
            },
            passingYear: {
                type: Number,
                require: true,
            }
        },
        e1: {
            examName: {
                type: String,
                required: true,
            },
            board: {
                type: String,
                required: true
            },
            institute: {
                type: String,
                required: true
            },
            percent: {
                type: Number,
                required: true
            },
            passingYear: {
                type: Number,
                require: true,
            }
        }
    }

})

module.exports = mongoose.model('details',studentSchema)