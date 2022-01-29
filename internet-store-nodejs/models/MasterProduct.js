const mongoose = require('mongoose');

const masterProductSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    variants: {
        type: Array
    },
    variationAttrs: {
        type: Object
    },
    defaultVariant: {
        type: String
    }
});

const MasterProduct = mongoose.model('master_product', masterProductSchema);

module.exports = MasterProduct;
