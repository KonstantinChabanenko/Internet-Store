const mongoose = require('mongoose');

const secondaryCategorySchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    products: {
        type: Array
    }
});

const SecondaryCategory = mongoose.model('secondary_category', secondaryCategorySchema);

module.exports = SecondaryCategory;