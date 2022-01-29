const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    imageULR: {
        type: String
    }
});

const Color = mongoose.model('color', colorSchema);

module.exports = Color;
