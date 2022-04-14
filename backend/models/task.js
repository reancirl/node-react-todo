const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required!']
    }, 
}, {
    timestamps: true
})

module.exports = mongoose.model('Task', schema)