const { Router } = require('express');
const ProductsController = require('../controllers/ProductsController');

const router = Router();

router.get('/products', ProductsController.products_get);

module.exports = router;
