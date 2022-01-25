const show = (req, res, next) => {
    const viewData = res.viewData;

    res.json(viewData);
};

module.exports = {
    show
};
