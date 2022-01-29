const { Router } = require('express');
const categories_get = require('../controllers/CategoriesController');

const router = Router();

router.get('/categories', categories_get);

module.exports = router;
