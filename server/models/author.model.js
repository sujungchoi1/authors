const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required!"],
        minlength: [3, "Must be longer than 3 characters!"]
    }
,  
    desc: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Must be longer than 3 characters!"]
    }
,  
    genre: {
        type: String,
        required: [true, "please select the genre"]
    }
,  
    completed: {
        type: Boolean,
        default: false
    }
},{ timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);
