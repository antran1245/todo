const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Action item is needed."],
        minLength: [3, "Required at least 3 characters long."]
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Item = mongoose.model('items', ItemSchema);

module.exports = Item;