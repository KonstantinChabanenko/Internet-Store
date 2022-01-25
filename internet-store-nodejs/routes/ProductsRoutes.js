const { Router } = require('express');
const ProductsController = require('../controllers/ProductsController');

const router = Router();

router.get('/', ProductsController.products_get);

module.exports = router;
