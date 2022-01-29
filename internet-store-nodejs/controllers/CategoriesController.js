const PrimaryCategory = require('../models/PrimaryCategory');

const categories_get = async (req, res, next) => {
    const categories = await PrimaryCategory.find();

    res.json({ categories });
};

module.exports = categories_get;
