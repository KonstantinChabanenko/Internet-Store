const SecondaryCategory = require('../models/SecondaryCategory');
const MasterProduct = require('../models/MasterProduct');
const Color = require('../models/Color');
const Variant = require('../models/Variant');

const products_get = async (req, res, next) => {
    const productsAmount = 12;
    const cgid = req.query.cgid;
    const productIndex = req.query.productIndex ? parseInt(req.query.productIndex, 10) : 0;
    const category = await SecondaryCategory.findById(cgid);
    const products = await Promise.all(
        category.products.slice(productIndex, productsAmount + productIndex).map(async (productID) => {
            const productTile = {};
            const product = await MasterProduct.findById(productID);
            const defaultVariantID = product.defaultVariant || product.variants[0];
            const defaultVariant = await Variant.findById(defaultVariantID);

            productTile.id = productID;
            productTile.name = defaultVariant.name;
            productTile.price = defaultVariant.price;
            productTile.imageSrc = defaultVariant.images.medium[0];

            if (product.variationAttrs?.colors?.length) {
                productTile.colors = await Promise.all(
                    product.variationAttrs.colors.map(async (colorID) => {
                        const color = await Color.findById(colorID);

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
