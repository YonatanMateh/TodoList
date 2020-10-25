const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false
    });


module.exports = mongoose.model('Task', taskSchema);