const router = require('express').Router();
const controller = require('../controller/pokeController');

router.get('/fetchPoke', controller.fetchPoke);
router.post('/createPoke', controller.createPoke);

module.exports = router;