let mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    author: String,
    type: String,
    createDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("news", NewsSchema);