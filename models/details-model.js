const mongoose= require('mongoose');

const DetailsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    listId:{
        type: mongoose.Types.ObjectId,
        required: true
    }
}
)
const Details = mongoose.Model('Details', DetailsSchema);
module.exports ={Details};