const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();

router.get('/product', ProductController.product_get);

module.exports = router;
