const SecondaryCategory = require('../models/SecondaryCategory');
const MasterProduct = require('../models/MasterProduct');
const Color = require('../models/Color');
const Variant = require('../models/Variant');

const products_get = async (req, res, next) => {
    const productsAmount = 12;
    const cgid = req.query.cgid;
    const productIndex = req.query.productIndex ? parseInt(req.query.productIndex, 10) : 0;
    const category = await SecondaryCategory.findById(cgid).exec();
    const products = await Promise.all(
        category.products.slice(productIndex, productsAmount + productIndex).map(async (productID) => {
            const productTile = {};
            const master = await MasterProduct.findById(productID).exec();
            const defaultVariantID = master.defaultVariant || master.variants[0];
            const defaultVariant = await Variant.findById(defaultVariantID).exec();

            productTile.id = productID;
            productTile.name = master.name;
            productTile.price = defaultVariant.price;
            productTile.imageSrc = defaultVariant.images.medium[0];

            if (master.variationAttrs?.colors?.length) {
                productTile.colors = await Promise.all(
                    master.variationAttrs.colors.map(async (colorID) => {
                        const color = await Color.findById(colorID).exec();

                        return color;
                    })
                );
            }

            return productTile;
        })
    );

    res.json({ category, products });
};

module.exports = {
    products_get
};
