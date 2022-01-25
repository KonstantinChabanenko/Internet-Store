const products_get = (req, res, next) => {
    const viewData = res.viewData;

    res.json(viewData);
};

module.exports = {
    products_get
};
