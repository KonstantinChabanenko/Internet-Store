const MasterProduct = require('../models/MasterProduct');
const Color = require('../models/Color');
const Variant = require('../models/Variant');

const product_get = async (req, res, next) => {
    const querystring = req.query;
    const { masterID, ...variationParams } = querystring;
    const master = await MasterProduct.findById(masterID).exec();
    let result;
    let variant;

    if (!Object.keys(variationParams).length) {
        const defaultVariantID = master.defaultVariantID || master.variants[0];

        variant = await Variant.findById(defaultVariantID).exec();
    } else {
        const variationAttrs = { masterID };

        for (let param in variationParams) {
            variationAttrs[`variationAttrs.${param}`] = querystring[param];
        }

        variant = await Variant.findOne(variationAttrs).exec();
    }

    result = {
        id: master._id,
        name: master.name,
        price: variant.price,
        images: variant.images.medium,
        description: master.description,
        variationAttrs: {}
    };

    if (master.variationAttrs?.colors?.length) {
        result.variationAttrs.colors = await Promise.all(
            master.variationAttrs.colors.map(async (colorID) => {
                const color = await Color.findById(colorID).exec();

                return color;
            })
        );
    }

    Object.keys(master.variationAttrs).forEach((attribute) => {
        if (attribute === 'colors') {
            return;
        }

        result.variationAttrs[attribute] = master.variationAttrs[attribute];
    });

    res.json(result);
};

module.exports = {
    product_get
};
