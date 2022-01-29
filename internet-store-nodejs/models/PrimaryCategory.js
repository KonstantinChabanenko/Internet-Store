const mongoose = require('mongoose');

const primaryCategorySchema = new mongoose.Schema({
    _id: {
        type: String
    },
    subCategories: {
        type: Array
    },
    name: {
        type: String
    }
});

const PrimaryCategory = mongoose.model('primary_category', primaryCategorySchema);

module.exports = PrimaryCategory;
