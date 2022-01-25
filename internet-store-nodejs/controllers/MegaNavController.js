const PrimaryCategory = require('../models/PrimaryCategory');

const meganav_get = async (req, res, next) => {
    const mainNavCategories = await PrimaryCategory.find();

    res.json({ mainNavCategories });
};

module.exports = meganav_get;
