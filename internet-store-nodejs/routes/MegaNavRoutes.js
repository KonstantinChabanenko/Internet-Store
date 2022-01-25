const { Router } = require('express');
const meganav_get = require('../controllers/MegaNavController');

const router = Router();

router.get('/meganav', meganav_get);

module.exports = router;
