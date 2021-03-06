const mongoose= require('mongoose');
const { title } = require('process');
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
}
)
const Task = mongoose.Model('Task', TaskSchema);
module.exports ={Task};