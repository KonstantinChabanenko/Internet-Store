const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    variationAttrs: {
        type: Object
    },
    images: {
        type: Object
    },
    price: {
        type: Number
    },
    masterID: {
        type: String
    }
});

const Variant = mongoose.model('variation_product', variantSchema);

module.exports = Variant;
